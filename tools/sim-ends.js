/*
 * Mô phỏng phân bố kết cục: node tools/sim-ends.js [số ván=10000] [mã thế giới, ví dụ w9 w10] [--bot]
 * Mặc định người chơi chọn ngẫu nhiên; --bot chọn lựa chọn có tỉ lệ thành công cao nhất.
 * --tune: dò wound {h,b,x} và pbias của từng thế giới cho gần chuẩn phân bố, in JSON kết quả (không ghi file).
 */
import { register } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
register(pathToFileURL(join(root, 'tools/sim-hooks.mjs')));

const el = () => ({ style: { setProperty() {} }, classList: { toggle() {}, add() {}, remove() {}, contains() { return false } }, dataset: {}, set innerHTML(v) {}, get innerHTML() { return '' }, set textContent(v) {}, setAttribute() {}, getAttribute() { return null }, appendChild() {}, insertBefore() {}, addEventListener() {}, querySelector() { return null }, querySelectorAll() { return [] } });
globalThis.document = { getElementById: el, documentElement: el(), addEventListener() {}, createElement: el, body: el(), querySelector() { return null }, querySelectorAll() { return [] } };
globalThis.window = globalThis;
globalThis.location = { protocol: 'http:' };
globalThis.localStorage = { getItem() { return null }, setItem() {} };
globalThis.fetch = async (p) => { const t = readFileSync(join(root, p), 'utf8'); return { ok: true, json: async () => JSON.parse(t) } };

const args = process.argv.slice(2);
const bot = args.includes('--bot');
const nums = args.filter(a => /^\d+$/.test(a)), ids = args.filter(a => /^w\d+$/.test(a));
const N = nums.length ? +nums[0] : 10000;

await import(pathToFileURL(join(root, 'js/main.js')));
await new Promise(r => setTimeout(r, 300));
const reg = await import(pathToFileURL(join(root, 'js/worlds/registry.js')));
const st = await import(pathToFileURL(join(root, 'js/state.js')));
const ch = await import(pathToFileURL(join(root, 'js/choices.js')));
const sts = await import(pathToFileURL(join(root, 'js/stats.js')));
const { loadWorld } = await import(pathToFileURL(join(root, 'js/worlds/loader.js')));

const ORDER = ['true', 'near', 'half', 'canon', 'black', 'bdead', 'dead'];
function run(id, n) {
  const cnt = {};
  for (let g = 0; g < n; g++) {
    st.reset();
    let guard = 0;
    while (st.S.phase !== 'end' && guard++ < 500) {
      if (st.S.phase === 'event') {
        const e = st.EV[st.S.i], av = e.ch.map((c, k) => k).filter(k => !e.ch[k].need || e.ch[k].need());
        let k;
        if (bot) { let b = -1; av.forEach(i => { const p = sts.prob(e.ch[i]); if (p > b) { b = p; k = i } }) }
        else k = av[Math.floor(Math.random() * av.length)];
        ch.choose(k);
      } else ch.next();
    }
    cnt[st.S.end] = (cnt[st.S.end] || 0) + 1;
  }
  return cnt;
}
const show = (id, cnt, n) => id.padEnd(4) + ORDER.filter(k => cnt[k] || st.ENDS[k]).map(k => k + ' ' + ((cnt[k] || 0) * 100 / n).toFixed(1).padStart(4)).join(' | ');

/* Chuẩn: Hoàn hảo 10, Gần trọn 15, Ở lại 15, phần còn lại (60) chia đều cho các kết cục thua. */
function target(w) {
  const loss = ['black', 'bdead', 'dead'].concat(w.ENDS.canon ? ['canon'] : []), t = { true: 10, near: 15, half: 15 };
  loss.forEach(k => t[k] = 60 / loss.length);
  return t;
}
const err = (cnt, n, t) => Object.keys(t).reduce((a, k) => a + ((cnt[k] || 0) * 100 / n - t[k]) ** 2, 0);

const list = ids.length ? ids : reg.OPEN;
if (args.includes('--tune')) {
  const out = {}, TN = 2500;
  for (const id of list) {
    await loadWorld(id); const w = reg.WORLDS[id], t = target(w);
    let v = Object.assign({ h: 4, b: 6, x: 1 }, w.WOUND || {}); v.pb = w.PBIAS;
    const ev = (v) => { w.WOUND = { h: v.h, b: v.b, x: v.x }; w.PBIAS = v.pb; st.useWorld(id); return err(run(id, TN), TN, t) };
    let best = ev(v), step = { h: 2, b: 2, x: .15, pb: .02 };
    for (let it = 0; it < 18; it++) {
      for (const k of ['h', 'b', 'x', 'pb']) for (const sg of [1, -1]) {
        const u = Object.assign({}, v); u[k] = Math.max(k === 'x' ? .3 : k === 'pb' ? -.3 : 0, u[k] + sg * step[k]);
        const e1 = ev(u); if (e1 < best) { best = e1; v = u }
      }
      for (const k in step) step[k] *= .8;
    }
    w.WOUND = { h: v.h, b: v.b, x: v.x }; w.PBIAS = v.pb; st.useWorld(id);
    const cnt = run(id, 10000);
    console.error(show(id, cnt, 10000), JSON.stringify(v));
    out[id] = { wound: { h: +v.h.toFixed(2), b: +v.b.toFixed(2), x: +v.x.toFixed(2) }, pbias: +v.pb.toFixed(4) };
  }
  console.log(JSON.stringify(out, null, 1));
} else {
  for (const id of list) { await loadWorld(id); st.useWorld(id); console.log(show(id, run(id, N), N)) }
}
process.exit(0);
