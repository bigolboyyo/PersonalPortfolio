import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Box, Typography } from "@mui/material";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum mollitia itaque quo esse nulla temporibus, fuga, magnam beatae debitis ipsum? Alias enim a doloremque quis quo? Provident, nisi. Possimus.";

const ThreeDBox = ({
  width = "auto",
  maxWidth = 1000,
  text = lorem,
  rotX = 30,
  rotY = 30,
  position = "unset",
}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    gsap.set(box, { transformPerspective: 1000 });

    box.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX / window.innerWidth - 0.5;
      const mouseY = event.clientY / window.innerHeight - 0.5;

      gsap.to(box, {
        rotationY: mouseX * rotX,
        rotationX: mouseY * rotY,
        transformOrigin: "center",
        duration: 0.5,
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        rotationY: 0,
        rotationX: 0,
        transformOrigin: "center",
        duration: 0.5,
      });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: width,
        maxWidth: maxWidth,
        margin: "1rem auto",
        backgroundColor: "transparent",
        padding: "1rem",
        borderRadius: "20px",
        backdropFilter: "blur(7px) contrast(0.6)",
        textAlign: "center",
        overflowY: "auto",
        position: position,
      }}
    >
      <Typography variant="p">{text}</Typography>
    </Box>
  );
};

export default ThreeDBox;
