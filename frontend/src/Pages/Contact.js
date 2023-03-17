import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas-contact");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    // Your canvas drawing code for Contact component goes here...

    return () => {
      // Cleanup code, if necessary
    };
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <canvas id="canvas-contact"></canvas>
    </div>
  );
};

export default Contact;
