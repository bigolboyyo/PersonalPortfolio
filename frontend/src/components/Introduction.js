import { Typography, Card, CardContent } from "@mui/material";
import React from "react";
import selfie from "../images/self.jpeg";

import SpinningAvatar from "./SpinningAvatar";

function Introduction() {
  return (
    <Card raised={true}>
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="p" sx={{ alignSelf: "flex-start" }}>
          Hello! My Name Is
        </Typography>
        <SpinningAvatar src={selfie} />
        <Typography
          variant="h1"
          sx={{ alignSelf: "flex-end", fontSize: "3rem" }}
        >
          Wesley Grant
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Introduction;
