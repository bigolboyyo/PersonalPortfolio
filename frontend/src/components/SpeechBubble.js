import React, { useRef, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { animateBubbles } from "../animations/animateBubbles";

const SpeechBubble = ({ text }) => {
  const speechBubbleRef = useRef(null);

  useEffect(() => {
    animateBubbles(speechBubbleRef.current);
  }, []);

  return (
    <Box
      ref={speechBubbleRef}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 20,
        p: 2,
        maxWidth: 200,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
        opacity: 0.4,
        height: "fit-content",
        width: "fit-content",
        minWidth: "35vw",
        textAlign: "center",
      }}
    >
      <Typography variant="p" sx={{ padding: "1rem" }}>
        {text}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          width: 0,
          height: 0,
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderTop: "20px solid white",
          bottom: "-20px",
          left: "calc(50% - 20px)",
        }}
      />
    </Box>
  );
};

export default SpeechBubble;
