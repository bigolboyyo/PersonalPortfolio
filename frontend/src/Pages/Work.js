import React, { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas-work");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    // Your canvas drawing code for Work component goes here...

    return () => {
      // Cleanup code, if necessary
    };
  }, []);

  return (
    <div>
      <h1>Work</h1>
      <canvas id="canvas-work"></canvas>
    </div>
  );
};

export default Work;
