import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import CircleAnimation from "../components/CircleAnimation";
import { mouseClickAnimation } from "../animations/mouseClickAnimation";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import AboutMe from "../components/AboutMe";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

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
    animateRouteSwitch(null, scrollContainerRef.current);
  }, []);

  useEffect(() => {
    const sections = [introRef, aboutMeRef, partOneRef, partTwoRef];

    gsap.utils.toArray(sections).forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section.current,
        start: "top center",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.2,
          // delay: 0.1,
          ease: "power1.out",
        },
        onEnter: () => {
          console.log("scrolling to section", index);
        },
        onEnterBack: () => {
          console.log("scrolling to section", index);
        },
      });
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
        minHeight: "400vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
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
