import { useRef, useEffect, useState } from "react";

function DrawingBoard() {
  const canvasRef = useRef(null);
  const [drawingEnabled, setDrawingEnabled] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let painting = false;

      function startPainting() {
        painting = true;
      }

      function stopPainting() {
        painting = false;
        ctx.beginPath();
      }

      function draw(e) {
        if (!painting || !drawingEnabled) return;

        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
      }

      canvas.addEventListener("mousedown", startPainting);
      canvas.addEventListener("mouseup", stopPainting);
      canvas.addEventListener("mousemove", draw);

      return () => {
        canvas.removeEventListener("mousedown", startPainting);
        canvas.removeEventListener("mouseup", stopPainting);
        canvas.removeEventListener("mousemove", draw);
      };
    }
  }, [drawingEnabled]);

  function handleToggleDrawing() {
    setDrawingEnabled((prevState) => !prevState);
  }

  function handleClear() {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <button
        style={{
          position: "fixed",
          bottom: "3%",
          left: "3%",
          zIndex: 2,
        }}
        onClick={handleToggleDrawing}
      >
        {drawingEnabled ? "Disable drawing" : "Enable drawing"}
      </button>
      <button
        onClick={handleClear}
        style={{
          position: "fixed",
          bottom: "3%",
          left: "15%",
          zIndex: 3,
        }}
      >
        Clear
      </button>
    </>
  );
}

export default DrawingBoard;
