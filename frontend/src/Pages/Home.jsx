import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";
// import { animateRouteSwitch } from "../animations/animateRouteSwitch";
// import CircleAnimation from "../components/CircleAnimation";
// import { mouseClickAnimation } from "../animations/mouseClickAnimation";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import AboutMe from "../components/AboutMe";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// const circleRef = useRef(null);
// animateRouteSwitch(null, homeRef.current);
const Home = () => {
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const aboutMeRef = useRef(null);
  const partOneRef = useRef(null);
  const partTwoRef = useRef(null);

  const sections = [introRef, aboutMeRef, partOneRef, partTwoRef];

  useEffect(() => {
    sections.forEach((section, index) => {
      let start = "bottom-=1 top";
      let end = "bottom top";

      if (index === 0) {
        start = "top top";
        end = "bottom top";
      } else if (index === sections.length - 1) {
        start = `bottom-${sections.length - 2} top`;
        end = "bottom bottom";
      }

      ScrollTrigger.create({
        markers: true,
        trigger: section.current,
        start: start,
        end: end,
        snap: {
          snapTo: { y: section.current.offsetTop },
          duration: 0.1,
          centerVertical: true,
          snapAlign: "center",
        },
      });

      ScrollTrigger.create({
        trigger: section.current,
        onEnter: () => {
          gsap.to(window, {
            duration: 0.5,
            scrollTo: section.current,
          });
        },
      });
    });
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
        minHeight: "400vh",
        gap: "25vh",
        scrollSnapType: "y mandatory",
      }}
      // onClick={(e) => mouseClickAnimation(e, circleRef.current, homeRef)}
    >
      {/* <CircleAnimation circleRef={circleRef} /> */}
      <Introduction ref={introRef} />
      <AboutMe ref={aboutMeRef} />
      <PartOne ref={partOneRef} />
      <PartTwo ref={partTwoRef} />
    </Container>
  );
};

export default Home;
