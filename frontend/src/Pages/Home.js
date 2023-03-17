import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas-home");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    // Your canvas drawing code goes here...
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <canvas id="canvas-home"></canvas>
    </div>
  );
};

export default Home;
