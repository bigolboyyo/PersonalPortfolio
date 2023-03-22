import React, { useEffect, useRef } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import { iconConfig } from "../Exports/iconConfig";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);
  // gsap.registerPlugin(DrawSVGPlugin);

  useEffect(() => {
    animateRouteSwitch(null, aboutRef.current);

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(
      ".skill-imgs",
      { y: "-=200", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, ease: "back.out(1.7)" }
    ).then(() => {
      gsap.to(".skill-imgs", {
        duration: 1,
        x: "+=5" && "-=5",
        y: "+=3" && "-=3",
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <Container ref={aboutRef} disableGutters={true} maxWidth="false">
      {/* <Typography variant="h1">About</Typography> */}
      <Grid
        container
        spacing={3}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          width: "100%",
        }}
      >
        {iconConfig.map((item) => (
          <Grid
            item={true}
            key={`${item.name}-grid-item`}
            sx={{ width: "33.33%" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "50%",
              }}
            >
              <img
                className="skill-imgs"
                src={item.icon}
                alt={item.name}
                key={item.name + "-svg"}
                width="70%"
                style={{
                  boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.25)",
                  border: "6px solid black",
                  borderRadius: "25%",
                  padding: "1rem",
                  backgroundColor: "#DCDCDC",
                }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
