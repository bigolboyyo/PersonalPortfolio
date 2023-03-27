import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import { mouseClickAnimation } from "../animations/mouseClickAnimation";
import CircleAnimation from "../components/CircleAnimation";

const Work = () => {
  const workRef = useRef(null);
  const circleRef = useRef(null);

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
        position: "relative",
      }}
      //To make this work here I had to add position relative
      // the mouseClickAnimation looks for a relative anchor.
      // so if container is the relative anchor without another component
      // the positioning is all skewed
      onClick={(e) => mouseClickAnimation(e, circleRef.current, workRef)}
    >
      <CircleAnimation circleRef={circleRef} />
    </Container>
  );
};

export default Work;
