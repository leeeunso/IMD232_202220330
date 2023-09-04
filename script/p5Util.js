let canvasContainerId;
let canvasAspectRatio;
let isCanvasFlexible;

const setCanvasContainer = (id, width, height, isFlexible = false) => {
  canvasContainerId = id;
  if (!width || !height) {
    canvasAspectRatio = 0;
    isCanvasFlexible = true;
  } else {
    canvasAspectRatio = width / height;
    isCanvasFlexible = isFlexible;
  }
  const canvasContainer = select(`#${canvasContainerId}`);
  let canvas;
  if (canvasAspectRatio === 0) {
    canvas = createCanvas(canvasContainer.width, canvasContainer.height);
  } else if (isFlexible) {
    canvas = createCanvas(
      canvasContainer.width,
      (canvasContainer.width * 1) / canvasAspectRatio
    );
  } else {
    canvas = createCanvas(width, height);
    document.getElementById(canvasContainerId).style.width = `${width}px`;
    document.getElementById(canvasContainerId).style.height = `${height}px`;
  }
  canvas.parent(canvasContainer);
};

function windowResized() {
  if (!isCanvasFlexible) return;
  const canvasContainer = select(`#${canvasContainerId}`);
  if (canvasAspectRatio === 0) {
    resizeCanvas(canvasContainer.width, canvasContainer.height);
  } else {
    resizeCanvas(
      canvasContainer.width,
      (canvasContainer.width * 1) / canvasAspectRatio
    );
  }
}

function isMouseInsideCanvas() {
  return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
}
