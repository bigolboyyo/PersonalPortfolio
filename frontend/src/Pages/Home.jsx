import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import CircleAnimation from "../components/CircleAnimation";
import { mouseClickAnimation } from "../animations/mouseClickAnimation";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import AboutMe from "../components/AboutMe";
import { Power2 } from "gsap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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
    tl.to(container, {
      scrollTo: introRef.current,
      duration: 0.0001,
      ease: Power2.easeInOut,
    })
      .to(container, {
        scrollTo: aboutMeRef.current,
        duration: 0.0001,
        ease: Power2.easeInOut,
      })
      .to(container, {
        scrollTo: partOneRef.current,
        duration: 0.0001,
        ease: Power2.easeInOut,
      })
      .to(container, {
        scrollTo: partTwoRef.current,
        duration: 0.0001,
        ease: Power2.easeInOut,
      });
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      animation: tl,
      snap: 1 / 3,
      duration: 0.0001,
      snapDelay: 0,
    });
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
        gap: "50vh",
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
