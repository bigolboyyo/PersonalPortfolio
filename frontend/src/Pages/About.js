import React, { useEffect, useRef } from "react";
import { Typography, Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, aboutRef.current);
  }, []);

  return (
    <Container ref={aboutRef} disableGutters={true} maxWidth="false">
      <Typography variant="h1">About</Typography>
    </Container>
  );
};

export default About;
