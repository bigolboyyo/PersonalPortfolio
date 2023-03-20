import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import NavList from "./NavList";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(isOpen);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Wesley Grant</Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {<NavList toggleDrawer={toggleDrawer} />}
      </Drawer>
    </AppBar>
  );
}
