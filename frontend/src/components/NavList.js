import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

export default function NavList({ toggleDrawer }) {
  return (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Work", "Contact"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
