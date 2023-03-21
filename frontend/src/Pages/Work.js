import React, { useEffect, useRef } from "react";
import { Typography, Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";

const Work = () => {
  const workRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, workRef.current);
  }, []);

  return (
    <Container ref={workRef} disableGutters={true} maxWidth="false">
      <Typography variant="h1">Work</Typography>
    </Container>
  );
};

export default Work;
