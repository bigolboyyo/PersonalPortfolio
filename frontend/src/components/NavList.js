import React from "react";
import { List, ListItemText, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavList({ toggleDrawer }) {
  return (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Work", "Contact"].map((text) => (
          <Button
            key={text}
            component={Link}
            to={text === "Home" ? `/` : `/${text.toLowerCase()}`}
            variant="text"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
    </div>
  );
}