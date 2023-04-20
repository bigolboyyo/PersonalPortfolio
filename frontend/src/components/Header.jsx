import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import { useLocation } from "react-router-dom";
import { getPageName } from "../Exports/getPageName";
import SiteIcon from "./SiteIcon";
import NavList from "./NavList";

export default function Header() {
  const headerRef = useRef(null);
  const location = useLocation();

  const routeName = location.pathname;
  const pageName = getPageName(routeName);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    animateRouteSwitch(null, headerRef.current);
  }, []);

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
    <AppBar
      ref={headerRef}
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{pageName}</Typography>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {<NavList toggleDrawer={toggleDrawer} />}
      </Drawer>
      <SiteIcon message={message} setMessage={setMessage} />
    </AppBar>
  );
}
