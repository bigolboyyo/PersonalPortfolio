import React, { useEffect, useRef } from "react";
import { Typography, Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, contactRef.current);
  }, []);

  return (
    <Container ref={contactRef} disableGutters={true} maxWidth="false">
      <Typography variant="h1">Contact</Typography>
    </Container>
  );
};

export default Contact;
