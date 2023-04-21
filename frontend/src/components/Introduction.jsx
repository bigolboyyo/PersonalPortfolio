import { Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, forwardRef } from "react";

import SpinningAvatar from "./SpinningAvatar";
import { animateBubbles } from "../animations/animateBubbles";
import SpeechBubble from "./SpeechBubble";
import publicImage from "../exports/publicImage";

const selfie = publicImage("self.jpeg");

const Introduction = forwardRef((props, ref) => {
  useEffect(() => {
    animateBubbles(ref.current, true);
    // eslint-disable-next-line
  }, []);

  return (
    <Card
      ref={ref}
      sx={{
        boxShadow: "none",
        marginTop: 0,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "transparent",
        padding: "1rem",
        height: "100vh",
      }}
    >
      <CardContent
        sx={{
          gap: "clamp(1.25rem, 1.5rem, 2.5%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "clamp(60%, 60vmax, 80%)",
          height: "calc(100vh - 64px)",
        }}
      >
        <SpeechBubble
          text={
            <Typography
              sx={{
                fontSize: "clamp(2.1rem, 2.7vmax, 4rem)",
              }}
              variant="p"
            >
              Hello, My name is Wesley Grant!
            </Typography>
          }
          trianglePosition="south"
          flexAlign="flex-start"
        />

        <SpinningAvatar src={selfie} />

        <SpeechBubble
          text={
            <Typography
              sx={{
                fontSize: "clamp(2.1rem, 2.7vmax, 4rem)",
              }}
              variant="p"
            >
              I design stuff for the web.
            </Typography>
          }
          trianglePosition="north"
          flexAlign="flex-end"
        />
      </CardContent>
    </Card>
  );
});

export default Introduction;
