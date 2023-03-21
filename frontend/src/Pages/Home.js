import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const container = homeRef.current;
    container.scrollTop = container.scrollHeight;
  }, [homeRef.current?.scrollHeight]);

  useEffect(() => {
    animateRouteSwitch(null, homeRef.current);
  }, []);

  return (
    <Container
      ref={homeRef}
      disableGutters
      maxWidth="false"
      sx={{ overflow: "hidden" }}
    >
      <Introduction />
    </Container>
  );
};

export default Home;
