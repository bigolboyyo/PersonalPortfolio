import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";

function SmallCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        marginBottom: "2rem",
        border: "solid white",
        padding: 0,
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
              paddingTop: "0.35rem",
              textAlign: "center",
            }}
            variant="body2"
            color="text.secondary"
          >
            A smaller project that showcases my skills in React and MUI.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SmallCard;
