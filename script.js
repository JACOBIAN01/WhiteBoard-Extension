const canvas = document.getElementById("whiteboard");
const ctx = canvas.getContext("2d");
let drawing = false;



canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


function startDrawing(e) {
  drawing = true;
  draw(e); // Start drawing immediately
}

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000"; // Set to black for now

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function stopDrawing() {
  drawing = false;
  ctx.beginPath(); // Reset the path
}
