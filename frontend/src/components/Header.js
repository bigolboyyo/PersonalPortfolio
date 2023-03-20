import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer } from "@mui/material";
// import { useTheme } from "@emotion/react";
import { Menu as MenuIcon } from "@mui/icons-material";
import NavList from "./NavList";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Keeping this around for now for reference

  // const theme = useTheme();
  // const appBarHeight = theme.mixins.toolbar.minHeight;

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
