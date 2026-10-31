#!/usr/bin/env node
/*
 * Kiểm tra dữ liệu thế giới trong worlds/.
 *
 *   node tools/check-worlds.js
 *   node tools/check-worlds.js --baseline-rev 84beba2
 *   node tools/check-worlds.js --baseline-file /đường/dẫn/app.js-cũ.js
 *
 * 1. index.json và mỗi world-NN.json phải là JSON hợp lệ, đúng cấu trúc.
 * 2. Số mốc, thứ tự thế giới, id mốc và toàn bộ dữ liệu chữ/số phải khớp bản gốc.
 *    Bản gốc là js/app.js ở commit trước khi tách dữ liệu (mặc định 84beba2, lấy bằng git show),
 *    được chạy trong vm để lấy đúng các đối tượng thế giới mà game từng dựng.
 * Hàm điều kiện (bonus, fix, need, text động...) không nằm trong JSON nên không so ở đây.
 */
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const REV = opt('--baseline-rev') || '84beba2';
const KINDS = new Set(['duyen', 'hiem', 'chon', 'nan']);
const END_FIELDS = ['n', 'c', 'gain', 'piece', 'heat', 'scene'];

let errors = 0;
const fail = m => { errors++; console.log('  LỖI ' + m); };

function readJSON(rel) {
  try { return JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8')); }
  catch (e) { fail(rel + ': không đọc/parse được JSON (' + e.message + ')'); return null; }
}

// ---- Bản gốc: chạy app.js cũ trong vm với DOM giả
function loadBaseline() {
  let src = opt('--baseline-file') ? fs.readFileSync(opt('--baseline-file'), 'utf8')
    : cp.execFileSync('git', ['show', REV + ':js/app.js'], { cwd: ROOT, maxBuffer: 64 << 20 }).toString('utf8');
  const tail = 'useWorld("w1");showCover();\n})();';
  if (!src.includes(tail)) throw new Error('Bản gốc không có dòng khởi động quen thuộc, kiểm tra lại --baseline-rev');
  src = src.replace(tail, 'globalThis.__X={WORLDS:WORLDS,OPEN:OPEN,NEWEV:NEWEV};\n})();');
  const noop = () => {};
  const el = new Proxy(function () {}, { get: () => noop, set: () => true });
  const sb = { console, Math, Object, Array, JSON, String, Number, Date, Error, parseInt, parseFloat, isNaN,
    document: { getElementById: () => el, addEventListener: noop, documentElement: { dataset: {} }, querySelector: () => el, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem: noop }, window: {}, setTimeout: noop, clearTimeout: noop };
  sb.globalThis = sb;
  vm.createContext(sb); vm.runInContext(src, sb);
  return sb.__X;
}

// Chỉ lấy phần dữ liệu: bỏ hàm, getter và giá trị undefined
function dataOf(v) {
  if (Array.isArray(v)) return v.map(dataOf);
  if (v && typeof v === 'object') {
    const r = {};
    for (const k of Object.keys(v)) {
      const d = Object.getOwnPropertyDescriptor(v, k);
      if (d.get || typeof v[k] === 'function' || v[k] === undefined) continue;
      r[k] = dataOf(v[k]);
    }
    return r;
  }
  return v;
}
function diff(a, b, p, out) {
  if (a === b || (a !== a && b !== b)) return;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) !== Array.isArray(b)) { out.push(p + ': ' + JSON.stringify(a) + ' ≠ ' + JSON.stringify(b)); return; }
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) diff(a[k], b[k], p + '.' + k, out);
}

// ---- 1. Cấu trúc
console.log('Kiểm tra cấu trúc worlds/');
const index = readJSON('worlds/index.json');
if (!index || !Array.isArray(index.worlds)) { console.log('Không có index.json hợp lệ'); process.exit(1); }
const worlds = {};
const seenId = new Set(), seenNo = new Set();
let prevNo = 0;
for (const m of index.worlds) {
  if (seenId.has(m.id)) fail('index.json: trùng id ' + m.id);
  if (seenNo.has(m.no)) fail('index.json: trùng số thế giới ' + m.no);
  if (m.no <= prevNo) fail('index.json: thứ tự không tăng dần tại ' + m.id);
  seenId.add(m.id); seenNo.add(m.no); prevNo = m.no;
  for (const k of ['file', 'name', 'genre', 'hero', 'heroName', 'bossName', 'heroSub']) if (typeof m[k] !== 'string' || !m[k]) fail(m.id + ': index.json thiếu ' + k);
  const w = readJSON('worlds/' + m.file);
  if (!w) continue;
  worlds[m.id] = w;
  const tag = m.id + ' (' + m.file + ')';
  if (w.id !== m.id || w.no !== m.no) fail(tag + ': id/no không khớp index.json');
  if (!Array.isArray(w.events) || !w.events.length) { fail(tag + ': không có mốc nào'); continue; }
  if (m.events !== w.events.length) fail(tag + ': index.json ghi ' + m.events + ' mốc, file có ' + w.events.length);
  if (JSON.stringify(m.chapEnd) !== JSON.stringify(w.chapEnd)) fail(tag + ': chapEnd lệch giữa index.json và file thế giới');
  if (w.chapEnd[w.chapEnd.length - 1] !== w.events.length) fail(tag + ': chương cuối kết thúc ở mốc ' + w.chapEnd[w.chapEnd.length - 1] + ' nhưng có ' + w.events.length + ' mốc');
  if (!Array.isArray(w.prog) || w.prog.length !== w.chapEnd.length) fail(tag + ': số dòng prog không bằng số chương');
  const ids = new Set();
  w.events.forEach((e, i) => {
    const at = tag + ' mốc ' + (i + 1) + ' (' + e.id + ')';
    if (!e.id || ids.has(e.id)) fail(at + ': id rỗng hoặc trùng');
    ids.add(e.id);
    if (e.no !== i + 1) fail(at + ': no=' + e.no + ' không đúng thứ tự');
    if (!KINDS.has(e.kind)) fail(at + ': kind lạ ' + e.kind);
    for (const k of ['scene', 'place', 'title']) if (typeof e[k] !== 'string' || !e[k]) fail(at + ': thiếu ' + k);
    if (typeof e.text !== 'string' && typeof e.text !== 'undefined') fail(at + ': text không phải chuỗi');
    if (!Array.isArray(e.ch) || e.ch.length < 1) { fail(at + ': không có lựa chọn'); return; }
    e.ch.forEach((c, j) => {
      if (typeof c.t !== 'string' || !c.t) fail(at + ' lựa chọn ' + j + ': thiếu t');
      if (!c.ok || typeof c.ok.x !== 'string') fail(at + ' lựa chọn ' + j + ': thiếu ok.x');
      if (c.s && (!c.bad || typeof c.bad.x !== 'string')) fail(at + ' lựa chọn ' + j + ': có phép thử nhưng thiếu bad.x');
    });
  });
  for (const k of ['true', 'near', 'half', 'black', 'bdead', 'dead']) {
    if (!w.ends || !w.ends[k]) { fail(tag + ': thiếu kết cục ' + k); continue; }
    for (const f of END_FIELDS) if (w.ends[k][f] === undefined) fail(tag + ': kết cục ' + k + ' thiếu ' + f);
  }
}
console.log(errors ? '  → có lỗi cấu trúc' : '  → ' + index.worlds.length + ' thế giới, JSON hợp lệ');

// ---- 2. Đối chiếu bản gốc
console.log('Đối chiếu với bản gốc (git ' + (opt('--baseline-file') ? opt('--baseline-file') : REV) + ')');
const base = loadBaseline();
if (JSON.stringify(base.OPEN) !== JSON.stringify(index.worlds.map(m => m.id))) fail('thứ tự thế giới khác bản gốc: ' + base.OPEN.join() + ' ≠ ' + index.worlds.map(m => m.id).join());
const rows = [];
for (const id of base.OPEN) {
  const B = base.WORLDS[id], w = worlds[id];
  if (!w) { fail(id + ': thiếu file'); continue; }
  const before = errors;
  if (B.EV.length !== w.events.length) fail(id + ': số mốc ' + w.events.length + ' ≠ bản gốc ' + B.EV.length);
  const d = [];
  B.EV.forEach((e, i) => { const j = w.events[i]; if (!j) return; if (e.id !== j.id) d.push('mốc ' + (i + 1) + ': id ' + j.id + ' ≠ ' + e.id); diff(dataOf(e), j, 'mốc ' + (i + 1) + ' ' + e.id, d); });
  // text động: JSON giữ chuỗi nền (nếu có), hàm sinh text nằm trong js/app.js nên bỏ qua trường text khi bản gốc là getter/hàm
  const dd = d.filter(x => !/\.text: undefined ≠/.test(x));
  dd.slice(0, 5).forEach(x => fail(id + ' ' + x));
  if (dd.length > 5) fail(id + ': … còn ' + (dd.length - 5) + ' chỗ lệch nữa');
  const e2 = []; diff(dataOf(B.ENDS), w.ends, 'ends', e2); e2.slice(0, 3).forEach(x => fail(id + ' ' + x));
  const e3 = []; diff({ chapEnd: B.CHAP_END, prog: B.PROG, pbias: B.PBIAS, p0: B.P0 }, { chapEnd: w.chapEnd, prog: w.prog, pbias: w.pbias, p0: w.p0 }, 'chỉ số', e3); e3.slice(0, 3).forEach(x => fail(id + ' ' + x));
  for (const k of ['canonReason', 'note', 'fixed', 'base']) if (B[k] !== w[k]) fail(id + ': ' + k + ' khác bản gốc');
  if (id === 'w1') {
    const used = new Set(B.EV.map(e => e.id)), spare = Object.keys(base.NEWEV).filter(k => !used.has(k));
    const got = (w.unused || []).map(e => e.id);
    if (JSON.stringify(spare) !== JSON.stringify(got)) fail('w1: mốc dự phòng không khớp (' + got.length + ' ≠ ' + spare.length + ')');
    spare.forEach((k, i) => { const x = []; if (w.unused && w.unused[i]) diff(dataOf(base.NEWEV[k]), w.unused[i], 'dự phòng ' + k, x); x.slice(0, 2).forEach(m => fail('w1 ' + m)); });
  }
  rows.push([id, B.EV.length, w.events.length, w.events.reduce((n, e) => n + e.ch.length, 0), errors === before ? 'khớp' : 'LỆCH']);
}
console.log('  thế giới  mốc gốc  mốc JSON  lựa chọn  kết quả');
for (const r of rows) console.log('  ' + r[0].padEnd(9) + String(r[1]).padStart(8) + String(r[2]).padStart(10) + String(r[3]).padStart(10) + '  ' + r[4]);

console.log(errors ? '\nKẾT QUẢ: ' + errors + ' lỗi' : '\nKẾT QUẢ: đạt, mọi file hợp lệ và số mốc/nội dung khớp bản gốc');
process.exit(errors ? 1 : 0);
