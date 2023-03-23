import { Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, useRef } from "react";
import selfie from "../images/self.jpeg";

import SpinningAvatar from "./SpinningAvatar";
import { animateBubbles } from "../animations/animateBubbles";
import SpeechBubble from "./SpeechBubble";

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
        maxWidth: "80%",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          gap: "1.5rem",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 78px)",
          justifyContent: "center",
        }}
      >
        <SpeechBubble
          text={<Typography variant="p">Hello, I am Wesley Grant!</Typography>}
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
