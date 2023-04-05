import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { animateTextStretch } from "../animations/animateTextStretch";
import ThreeDBox from "./ThreeDBox";

const myDetails =
  "As a former bartender turned software developer, I bring a unique blend of technical and people skills to the table. With a strong foundation in React, JavaScript, and Python, I'm always eager to learn new languages and technologies to improve my craft. My goal is to create innovative applications that not only solve problems, but also bring joy to users' lives. When I'm not coding, you can find me listening to music, playing video games, or hiking in the mountains.";

function AboutMe() {
  const textRef = useRef(null);

  useEffect(() => {
    animateTextStretch(textRef.current);
  }, []);

  return (
    <Box sx={{ height: "100vh" }}>
      <ThreeDBox
        width={"fit-content"}
        maxWidth={"60%"}
        rotX={180}
        text={
          <Typography ref={textRef} variant="p">
            About Me
          </Typography>
        }
      />

      <ThreeDBox
        maxWidth={"90vw"}
        text={<Typography variant="p">{myDetails}</Typography>}
      />
    </Box>
  );
}

export default AboutMe;
