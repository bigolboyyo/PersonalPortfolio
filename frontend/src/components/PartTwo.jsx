import React, { useState, useEffect, forwardRef, useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SpeechBubble from "./SpeechBubble";
import Canvas from "./Canvas";
import Code from "./Code";
import { getCanvasString } from "../Exports/getCanvasString";
import RevealButton from "./RevealButton";

const PartTwo = forwardRef((props, ref) => {
  const [showCode, setShowCode] = useState(false);
  const [image, setImage] = useState("ufo");
  const [vX, setVx] = useState(1);
  const [vY, setVy] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const [liveCode, setLiveCode] = useState(getCanvasString());

  // const canvasRef = useRef(null);

  const codeTop = ref.current ? ref.current.offsetTop : 0;
  const partTwoRef = useRef(null);

  useEffect(() => {
    setLiveCode(getCanvasString(vX, vY, rotationSpeed, image));
  }, [vX, vY, rotationSpeed, image]);

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
        minHeight: "100vh",
      }}
    >
      <CardContent
        sx={{
          gap: "clamp(0.5rem, 1vh, 1rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "clamp(60%, 60vmax, 80%)",
          position: "relative",
          height: "fit-content",
        }}
      >
        <SpeechBubble
          text={
            <Typography variant="p">
              Now imagine the things we could do together.
            </Typography>
          }
          trianglePosition="south"
        />
        {showCode ? (
          <>
            <RevealButton showCode={showCode} setShowCode={setShowCode} />
            <Code height={"40vh"} canvasTop={codeTop}>
              {liveCode}
            </Code>
          </>
        ) : (
          <RevealButton showCode={showCode} setShowCode={setShowCode} />
        )}
        <Canvas
          ref={partTwoRef}
          edit={true}
          image={image}
          setImage={setImage}
          vX={vX}
          setVx={setVx}
          vY={vY}
          setVy={setVy}
          rotationSpeed={rotationSpeed}
          setRotationSpeed={setRotationSpeed}
        />
      </CardContent>
    </Card>
  );
});

export default PartTwo;
