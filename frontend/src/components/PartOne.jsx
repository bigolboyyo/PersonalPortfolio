import React, { useState, forwardRef, useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SpeechBubble from "./SpeechBubble";
import Canvas from "./Canvas";
import Code from "./Code";
import { getCanvasString } from "../Exports/getCanvasString";

import RevealButton from "./RevealButton";

const PartOne = forwardRef((props, ref) => {
  const [showCode, setShowCode] = useState(false);
  // const canvasRef = useRef(null);
  const codeTop = ref.current ? ref.current.offsetTop : 0;

  const partOneRef = useRef(null);

  return (
    <Card
      ref={ref}
      sx={{
        boxShadow: "none",
        marginTop: 0,
        justifyContent: "center",
        backgroundColor: "transparent",
        padding: "1rem",
        width: "100%",
        overflowY: "auto",
        height: "100vh",
        // minHeight: "100vh",
        // scrollSnapAlign: "start",
        // scrollSnapStop: "always",
        // marginBottom: "100vh",
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
        <Canvas ref={partOneRef} edit={false} />
      </CardContent>
    </Card>
  );
});

export default PartOne;
