import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import ProjectLink from "./ProjectLink";

function MainCard() {
  return (
    <Card
      sx={{
        maxWidth: 1000,
        marginBottom: "2rem",
        width: "40vmax",
        padding: 0,
        backgroundColor: "transparent",
        backdropFilter: "blur(7px) contrast(0.6)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random/1000x800"
          alt="Voxion project image"
        />
        <CardContent>
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "clamp(32px, 3rem, 64px)",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Voxion
          </Typography>
          <Divider variant="middle" sx={{ backgroundColor: "white" }} />
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              padding: "0.65rem",
              textAlign: "center",
              fontSize: "clamp(14px, 1.5rem, 48px)",
            }}
            variant="body2"
            color="text.secondary"
          >
            A project utilizing OpenAI completions and text-to-speech to imitate
            chat with audio.
          </Typography>
          <Divider variant="middle" sx={{ backgroundColor: "white" }} />
          <ProjectLink
            name="BB-Github"
            href="https://bigolboyyo.github.io/BouncingBalls/"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MainCard;
