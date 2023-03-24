import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import emmaClouds from "../images/clousd.jpg";

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
    ></Container>
  );
};

export default Work;
