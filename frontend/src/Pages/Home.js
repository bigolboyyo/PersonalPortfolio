import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [containerRef.current?.scrollHeight]);

  return (
    <Container
      ref={containerRef}
      disableGutters
      maxWidth="false"
      sx={{ overflow: "hidden" }}
    >
      <Introduction />
    </Container>
  );
};

export default Home;
