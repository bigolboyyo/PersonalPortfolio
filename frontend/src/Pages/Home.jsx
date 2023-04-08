import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import CircleAnimation from "../components/CircleAnimation";
import { mouseClickAnimation } from "../animations/mouseClickAnimation";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import AboutMe from "../components/AboutMe";

const Home = () => {
  const homeRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, homeRef.current);
  }, []);

  return (
    <Container
      ref={homeRef}
      disableGutters
      maxWidth="false"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "50vh",
        overflow: "auto",
        paddingBottom: "35vh",
      }}
      onClick={(e) => mouseClickAnimation(e, circleRef.current, homeRef)}
    >
      <CircleAnimation circleRef={circleRef} />
      <Introduction />
      <AboutMe />
      <PartOne />
      <PartTwo />
    </Container>
  );
};

export default Home;
