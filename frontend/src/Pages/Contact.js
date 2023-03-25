import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import ContactForm from "../components/ContactForm";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, contactRef.current);
  }, []);

  return (
    <Container
      ref={contactRef}
      disableGutters={true}
      maxWidth="false"
      sx={{
        height: "calc(100vh + 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ContactForm />
    </Container>
  );
};

export default Contact;
