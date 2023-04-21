import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import CircleAnimation from "../components/CircleAnimation";
import { mouseClickAnimation } from "../animations/mouseClickAnimation";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import AboutMe from "../components/AboutMe";
import { Timeline } from "gsap/gsap-core";
import { snappingAnimation } from "../animations/snappingAnimation";

const Home = () => {
  const circleRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const introRef = useRef(null);
  const aboutMeRef = useRef(null);
  const partOneRef = useRef(null);
  const partTwoRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    animateRouteSwitch(null, container);

    const tl = new Timeline({ paused: true, immediateRender: true });
    snappingAnimation(
      tl,
      container,
      introRef.current,
      aboutMeRef.current,
      partOneRef.current,
      partTwoRef.current
    );
  }, []);

  return (
    <Container
      ref={scrollContainerRef}
      disableGutters
      maxWidth="false"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowY: "hidden",
        gap: "15vh",
        scrollPaddingTop: "25vh",
        scrollPaddingBottom: "25vh",
      }}
      onClick={(e) =>
        mouseClickAnimation(e, circleRef.current, scrollContainerRef)
      }
    >
      <CircleAnimation circleRef={circleRef} />
      <Introduction ref={introRef} />
      <AboutMe ref={aboutMeRef} />
      <PartOne ref={partOneRef} />
      <PartTwo ref={partTwoRef} />
    </Container>
  );
};

export default Home;
