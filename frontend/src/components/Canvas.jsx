import React, { useEffect, forwardRef } from "react";
import publicImage from "../Exports/publicImage";
import CanvasTools from "./CanvasTools";
import { animateImage } from "../animations/animateImage";

const Canvas = forwardRef(
  (
    {
      height = "40vh",
      edit = false,
      image = "ufo",
      vX,
      vY,
      rotationSpeed,
      setImage,
      setVx,
      setVy,
      setRotationSpeed,
    },
    ref
  ) => {
    useEffect(() => {
      const canvas = ref.current;
      const ctx = canvas.getContext("2d");

      const canvasImage = new Image();
      canvasImage.src = publicImage(`${image}.png`);

      canvasImage.onload = function () {
        edit
          ? animateImage(ctx, canvas, canvasImage, vX, vY, rotationSpeed)
          : animateImage(ctx, canvas, canvasImage);
      };
      // eslint-disable-next-line
    }, [image, vX, vY, rotationSpeed]);

    return (
      <>
        {edit ? (
          <>
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
            <CanvasTools
              setVx={setVx}
              setVy={setVy}
              setRotationSpeed={setRotationSpeed}
              image={image}
              setImage={setImage}
            />
          </>
        ) : (
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
        )}
      </>
    );
  }
);

export default Canvas;
