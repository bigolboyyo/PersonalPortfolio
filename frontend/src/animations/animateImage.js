export const animateImage = (
  ctx,
  canvas,
  image,
  vx = 1,
  vy = 1,
  rotationSpeed = 0.01
) => {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let radius = 40;
  let rotation = 0;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.drawImage(image, -radius, -radius, radius * 2, radius * 2);
    ctx.restore();

    rotation += rotationSpeed;

    x += vx;
    y += vy;

    if (x + radius > canvas.width || x - radius < 0) {
      vx = -vx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
      vy = -vy;
    }

    requestAnimationFrame(draw);
  };

  draw();
};
