import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

function MainCard() {
  return (
    <Card
      sx={{
        maxWidth: 1000,
        marginBottom: "2rem",
        width: "50vmax",
        border: "solid white",
        padding: 0,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random/800x600"
          alt="Voxion project image"
        />
        <CardContent>
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Voxion Project
          </Typography>
          <Divider variant="middle" sx={{ backgroundColor: "white" }} />
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              paddingTop: "0.35rem",
              textAlign: "center",
            }}
            variant="body2"
            color="text.secondary"
          >
            A project utilizing OpenAI completions and text-to-speech to imitate
            chat with audio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MainCard;
