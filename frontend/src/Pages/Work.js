import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import SpeechBubble from "../components/SpeechBubble";

const Work = () => {
  const workRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, workRef.current);
  }, []);

  return (
    <Container
      ref={workRef}
      disableGutters={true}
      maxWidth="false"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <SpeechBubble
        text={
          "Hello World! I Am Wesley Grant! Let's make a much longer sentence. "
        }
      />
    </Container>
  );
};

export default Work;
