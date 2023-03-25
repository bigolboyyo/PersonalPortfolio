import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Box } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import { iconConfig } from "../Exports/iconConfig";
import { animateBubbles } from "../animations/animateBubbles";

const About = () => {
  const [gridHeight, setGridHeight] = useState("");
  // const [gridWidth, setGridWidth] = useState("");

  const aboutRef = useRef(null);
  const gridRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    setGridHeight(gridRef.current?.offsetHeight);
    // setGridWidth(gridRef.current?.offsetWidth);
    aboutRef.current.style.height = `${gridHeight}px`;

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    animateRouteSwitch(null, aboutRef.current);
    animateBubbles(".skill-imgs");
  }, []);

  return (
    <Container
      ref={aboutRef}
      disableGutters={true}
      maxWidth="false"
      sx={{
        height: `clamp(100vh, ${gridHeight + 72}px, 75vmax)`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        ref={filterRef}
        sx={{
          background: "transparent",
          backdropFilter: "blur(7px) contrast(0.8)",
          top: 0,
          outline: "solid transparent",
          width: `100vmax`,
          height: "100vmax",
          position: "fixed",
        }}
      />
      <Grid
        ref={gridRef}
        container
        spacing={3}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          width: "100%",
          height: "calc(100vh - 72px)",
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
                style={{
                  boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.25)",
                  border: "6px solid #40AAFE",
                  borderRadius: "25%",
                  padding: "0.5rem",
                  backgroundColor: "#DCDCDC",
                  maxWidth: "200px",
                  width: "clamp(64px, 12.5%, 30%)",
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
