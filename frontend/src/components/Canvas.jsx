import React, { useEffect, forwardRef } from "react";
import publicImage from "../Exports/publicImage";
import { animateImage } from "../animations/animateImage";

const Canvas = forwardRef(
  ({ image = "asteroid-transparent.png", height = "40vh" }, ref) => {
    useEffect(() => {
      const canvas = ref.current;
      const ctx = canvas.getContext("2d");

      const canvasImage = new Image();
      canvasImage.src = publicImage(image);

      canvasImage.onload = function () {
        animateImage(ctx, canvas, canvasImage);
      };
      // eslint-disable-next-line
    }, []);

    return (
      <canvas
        ref={ref}
        style={{
          display: "block",
          width: "auto",
          height: height,
          border: "solid white",
          background: "transparent",
          backdropFilter: "contrast(0.6)",
          borderRadius: "20px",
        }}
      />
    );
  }
);

export default Canvas;
