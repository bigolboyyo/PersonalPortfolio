import React, { useEffect, forwardRef, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { animateTextStretch } from "../animations/animateTextStretch";
import ThreeDBox from "./ThreeDBox";

const detailsOne = `As a former bartender turned software developer, I've found my calling in creating innovative applications. With a strong foundation in React, JavaScript, and Python, I'm always looking for new ways to solve problems and improve user experiences. I even learned GSAP to create animations for this very portfolio, and I'm currently exploring AI and speech technologies to build chat applications that are both functional and delightful to use.`;
const detailsTwo = `In my free time, I enjoy making music and exploring new mountains and trails. These hobbies are not just a way to unwind, but also help me to stay focused and creative in my work. I believe that by bringing my love for problem-solving and creativity to everything I do, I can achieve great things as a software developer.`;

const AboutMe = forwardRef((props, ref) => {
  const textRef = useRef(null);

  useEffect(() => {
    animateTextStretch(textRef.current);
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        height: "90vh",
        // scrollSnapAlign: "start",
        // scrollSnapStop: "always",
      }}
    >
      <ThreeDBox
        width={"fit-content"}
        maxWidth={"100%"}
        rotX={180}
        text={
          <Typography ref={textRef} variant="h1">
            About Me
          </Typography>
        }
      />
      <Box sx={{ height: "72.5vh", overflowX: "auto" }}>
        <Box>
          <ThreeDBox
            maxWidth={"80vw"}
            text={
              <Box>
                <Typography
                  sx={{
                    paddingLeft: "0.35rem",
                    paddingRight: "0.35rem",
                  }}
                  variant="p"
                >
                  {detailsOne}
                </Typography>
                <br />
                <Typography
                  sx={{
                    paddingLeft: "0.35rem",
                    paddingRight: "0.35rem",
                  }}
                  variant="p"
                >
                  {detailsTwo}
                </Typography>
              </Box>
            }
          />
        </Box>
      </Box>
    </Box>
  );
});

export default AboutMe;
