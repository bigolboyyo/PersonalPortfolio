import React from "react";
import { Container } from "@mui/material";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Introduction />
    </Container>
  );
};

export default Home;
