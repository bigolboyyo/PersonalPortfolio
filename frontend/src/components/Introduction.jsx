import { Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, useRef } from "react";

import SpinningAvatar from "./SpinningAvatar";
import { animateBubbles } from "../animations/animateBubbles";
import SpeechBubble from "./SpeechBubble";
import publicImage from "../Exports/publicImage";

const selfie = publicImage("self.jpeg");

function Introduction() {
  const introRef = useRef(null);

  useEffect(() => {
    animateBubbles(introRef.current, true);
  }, []);

  return (
    <Card
      ref={introRef}
      sx={{
        boxShadow: "none",
        marginTop: 0,
        width: "100%",
        maxWidth: "100%",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "transparent",
      }}
    >
      <CardContent
        sx={{
          gap: "clamp(1.25rem, 1.5rem, 2.5%)",
          display: "flex",
          flexDirection: "column",
          height: "92.5vh",
          justifyContent: "center",
          width: "clamp(60%, 60vmax, 80%)",
        }}
      >
        <SpeechBubble
          text={
            <Typography variant="p">Hello, My name is Wesley Grant!</Typography>
          }
          trianglePosition="south"
          flexAlign="flex-start"
        />

        <SpinningAvatar src={selfie} />

        <SpeechBubble
          text={
            <Typography variant="p">I design stuff for the web.</Typography>
          }
          trianglePosition="north"
          flexAlign="flex-end"
        />
      </CardContent>
    </Card>
  );
}

export default Introduction;
