import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import CircleAnimation from "../components/CircleAnimation";
import { mouseClickAnimation } from "../animations/mouseClickAnimation";

const Home = () => {
  const homeRef = useRef(null);
  const circleRef = useRef(null);

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
      onClick={(e) => mouseClickAnimation(e, circleRef.current, homeRef)}
    >
      <CircleAnimation circleRef={circleRef} />
      <Introduction />
    </Container>
  );
};

export default Home;