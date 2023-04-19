import React, { useRef, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { animateBubbles } from "../animations/animateBubbles";
import { getTriangleStyles } from "../Exports/getTriangleStyles";

const SpeechBubble = ({
  text,
  trianglePosition = "south",
  flexAlign = "center",
  minWidth = "20vw",
  maxWidth = "60vw",
}) => {
  const speechBubbleRef = useRef(null);

  useEffect(() => {
    animateBubbles(speechBubbleRef.current);
  }, []);

  return (
    <Box
      ref={speechBubbleRef}
      sx={{
        position: "relative",
        textAlign: "center",
        backgroundColor: "#F5FEFD",
        // border: "solid #40AAFE 4px",
        borderRadius: "20px",
        padding: "0.45rem",
        minWidth: minWidth,
        maxWidth: maxWidth,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf: flexAlign,
        "::before": {
          content: '""',
          zIndex: 10,
          ...getTriangleStyles(trianglePosition),
          //   backgroundColor: "#40AAFE",
        },
      }}
    >
      <Typography sx={{ justifyContent: "center" }}>{text}</Typography>
    </Box>
  );
};

export default SpeechBubble;
