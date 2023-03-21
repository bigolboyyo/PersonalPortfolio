import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import selfie from "/home/grantwe/react_flask_template/frontend/src/images/self.jpeg";

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
        <Typography sx={{ justifyContent: "flex-start" }}>
          Hello, my name is{" "}
        </Typography>
        <CardMedia
          sx={{ width: "20vmin", height: "20vmin" }}
          image={selfie}
          title="self"
        />
        <Typography sx={{ justifyContent: "flex-end" }}>
          Wesley Grant
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Introduction;
