import React from "react";
import Box from "@mui/material/Box";

function CircleAnimation({ circleRef }) {
  return (
    <Box
      ref={circleRef}
      className="circle"
      sx={{
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        transform: "translate(-50%, -50%) scale(0)",
        // pointerEvents: "auto",
      }}
    ></Box>
  );
}

export default CircleAnimation;
