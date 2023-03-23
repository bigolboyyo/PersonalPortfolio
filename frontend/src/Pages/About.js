import React, { useEffect, useRef } from "react";
import { Container, Grid } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import { iconConfig } from "../Exports/iconConfig";
import { animateBubbles } from "../animations/animateBubbles";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, aboutRef.current);
    animateBubbles(".skill-imgs");
  }, []);

  return (
    <Container
      ref={aboutRef}
      disableGutters={true}
      maxWidth="false"
      sx={{ height: "100vh", overflow: "hidden", position: "fixed" }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          width: "100%",
          height: "calc(100vh - 78px)",
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
                width="30%"
                style={{
                  boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.25)",
                  border: "6px solid #40AAFE",
                  borderRadius: "25%",
                  padding: "0.5rem",
                  backgroundColor: "#DCDCDC",
                  minWidth: "64px",
                  maxWidth: "200px",
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
