export const getCanvasString = (
  vx = 1,
  vy = 1,
  rotationSpeed = 0.01,
  image = "ufo",
  radius = 40
) => {
  const imageStringed = `/**
  * Animates an object bouncing off the canvas walls and rotating.
  * @param {CanvasRenderingContext2D} ctx - The context of the canvas to draw on.
  * @param {HTMLCanvasElement} canvas - The canvas to draw on.
  * @param {HTMLImageElement} image - The image to use for the object.
  */
 
 export const animateImage = (ctx, canvas, image) => {
   let x = canvas.width / 2; 
   let y = canvas.height / 2; 
   let radius = ${radius}; 
   let vx = ${vx}; 
   let vy = ${vy}; 
   let rotation = 0; 
   let rotationSpeed = ${rotationSpeed}; 
 
   const draw = () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
 
     ctx.save(); 
     ctx.translate(x, y); 
     ctx.rotate(rotation); 
     ctx.drawImage(${image}, -radius, -radius, radius * 2, radius * 2); 
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
 `;
  return imageStringed;
};
