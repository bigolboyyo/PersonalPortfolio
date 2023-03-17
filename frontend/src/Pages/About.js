import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas-about");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    // Your canvas drawing code for About component goes here...

    return () => {
      // Cleanup code, if necessary
    };
  }, []);

  return (
    <div>
      <h1>About</h1>
      <canvas id="canvas-about"></canvas>
    </div>
  );
};

export default About;
