import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SpeechBubble from "./SpeechBubble";

function PartTwo() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        marginTop: 0,
        width: "100%",
        maxWidth: "100%",
        justifyContent: "center",
        backgroundColor: "transparent",
        padding: "1rem",
        // height: "calc(100vh + 64px)",
      }}
    >
      <CardContent
        sx={{
          gap: "clamp(1.25rem, 1.5rem, 2.5%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "clamp(60%, 60vmax, 80%)",
          //   marginRight: "auto",
        }}
      >
        <SpeechBubble
          text={
            <Typography variant="p">
              I love solving problems and making cool things.
            </Typography>
          }
          maxWidth="40vw"
          trianglePosition="east"
        />
      </CardContent>
    </Card>
  );
}

export default PartTwo;
