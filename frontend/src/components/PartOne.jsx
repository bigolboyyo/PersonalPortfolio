import React, { useState, useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SpeechBubble from "./SpeechBubble";
import Canvas from "./Canvas";
import Code from "./Code";
import { getCanvasString } from "../Exports/getCanvasString";

import RevealButton from "./RevealButton";

function PartOne() {
  const [showCode, setShowCode] = useState(false);
  const canvasRef = useRef(null);
  const codeTop = canvasRef.current ? canvasRef.current.offsetTop : 0;

  return (
    <Card
      sx={{
        boxShadow: "none",
        marginTop: 0,
        justifyContent: "center",
        backgroundColor: "transparent",
        padding: "1rem",
        height: "75vh",
        width: "100%",
      }}
    >
      <CardContent
        sx={{
          gap: "clamp(1.25rem, 1.5rem, 2.5%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "clamp(60%, 60vmax, 80%)",
          position: "relative",
        }}
      >
        <SpeechBubble
          text={
            <Typography variant="p">
              A few lines of code and I could do such wonderful things.
            </Typography>
          }
          trianglePosition="south"
        />
        {showCode ? (
          <>
            <RevealButton showCode={showCode} setShowCode={setShowCode} />
            <Code height={"40vh"} canvasTop={codeTop}>
              {getCanvasString()}
            </Code>
          </>
        ) : (
          <RevealButton showCode={showCode} setShowCode={setShowCode} />
        )}
        <Canvas ref={canvasRef} />
      </CardContent>
    </Card>
  );
}

export default PartOne;
