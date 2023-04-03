import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";

import WorkGrid from "../components/WorkGrid";

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
      sx={{ overflowY: "auto" }}
    >
      <WorkGrid />
    </Container>
  );
};

export default Work;
