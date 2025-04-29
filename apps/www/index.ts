import { Universe } from "@repo/wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
if (!pre) {
  throw new Error("game-of-life-canvas not found");
}
const universe = Universe.new();
const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};
requestAnimationFrame(renderLoop);
// // wasm.greet("ayo");
// console.log(wasm.Cell.Alive);
