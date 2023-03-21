import React from "react";
import { List, ListItemText, Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import { LinkedIn, GitHub, Article, ContactPage } from "@mui/icons-material";

export default function NavList({ toggleDrawer }) {
  const socialLinks = [
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/grantwe/",
      icon: LinkedIn,
    },
    {
      text: "GitHub",
      link: "https://github.com/bigolboyyo",
      icon: GitHub,
    },
    {
      text: "Medium",
      link: "https://medium.com/@wesley.grant",
      icon: Article,
    },
    {
      text: "Resume",
      link: "https://bigolboyyo.github.io/resume/",
      icon: ContactPage,
    },
  ];

  const handleRouteClick = async (text, ref) => {
    toggleDrawer(false);
    await animateRouteSwitch(text, ref);
  };

  return (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <List
        sx={{ flexGrow: 1, textAlign: "center", placeContent: "space-evenly" }}
      >
        {["Home", "About", "Work", "Contact"].map((text) => (
          <Button
            key={text}
            component={Link}
            to={text === "Home" ? `/` : `/${text.toLowerCase()}`}
            variant="text"
            color="inherit"
            sx={{ width: "100%" }}
            onClick={(e) => handleRouteClick(text, e.currentTarget)}
          >
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
      <Divider />
      <List>
        {socialLinks.map((link) => (
          <Button
            key={link.text}
            component={"a"}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <link.icon />
          </Button>
        ))}
      </List>
    </Box>
  );
}
