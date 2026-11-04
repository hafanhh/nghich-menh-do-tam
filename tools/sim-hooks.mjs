/* Hook nạp module cho tools/sim-ends.js: thay ui/game.js bằng bản rỗng để mô phỏng không cần giao diện. */
export async function resolve(spec, ctx, next) {
  if (/\/ui\/game\.js$/.test(spec)) return { url: 'data:text/javascript,export function render(){}', shortCircuit: true };
  return next(spec, ctx);
}
