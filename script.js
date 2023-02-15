const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "cadetblue";

let randomWidth = 400;
let randomHeight = 300;
ctx.moveTo(randomWidth, randomHeight);

for (let i = 0; i < 100000; i++) {
  if (Math.random() > 0.5) {
    randomWidth += Math.round(Math.random()) * 10;
    randomHeight += Math.round(Math.random()) * 10;
  } else {
    randomWidth -= Math.round(Math.random()) * 10;
    randomHeight -= Math.round(Math.random()) * 10;
  }


  ctx.lineTo(randomWidth, randomHeight);
  console.log(`randomWidth: ${randomWidth} | randomHeight: ${randomHeight}`);
}
ctx.stroke();
