import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import stars from "../images/Stars.png";
import dots from "../images/Dots.png";

import { addClickEventListener } from "../Exports/addClickEventListener";

function CircleAnimation({ circleRef }) {
  const [starOrDot, setStarOrDot] = useState(true);

  useEffect(() => {
    const removeClickEventListener = addClickEventListener(circleRef, () => {
      setStarOrDot((prev) => !prev);
    });
    return removeClickEventListener;
  }, [circleRef]);

  return (
    <Box
      ref={circleRef}
      className="circle"
      sx={{
        position: "absolute",
        width: "10vmax",
        height: "10vmax",
        borderRadius: "50%",
        transform: "translate(-50%, -50%) scale(0)",
        pointerEvents: "none",
        // top/left added for empty container pages
        // remember you may have to remove this when containers aren't empty anymore
        top: 0,
        left: 0,
        backgroundImage: `url(${starOrDot ? stars : dots})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default CircleAnimation;
