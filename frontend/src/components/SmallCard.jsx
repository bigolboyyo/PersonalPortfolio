import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import ProjectLink from "./ProjectLink";

function SmallCard() {
  return (
    <Card
      sx={{
        width: "30vmax",
        maxWidth: 300,
        marginBottom: "2rem",
        padding: 0,
        backgroundColor: "transparent",
        backdropFilter: "blur(7px) contrast(0.6)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random/400x300"
          alt="Small project image"
          sx={{
            objectFit: "cover",
            maxHeight: "100%",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <CardContent>
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "clamp(16px, 1.75rem, 48px)",
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            Small Project
          </Typography>
          <Divider variant="middle" sx={{ backgroundColor: "white" }} />
          <Typography
            sx={{
              color: "white",
              padding: "0.35rem",
              textAlign: "center",
              fontSize: "clamp(16px, 1.5rem, 36px)",
            }}
            variant="body2"
            color="text.secondary"
          >
            A smaller project that showcases my skills in React and MUI.
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

export default SmallCard;
