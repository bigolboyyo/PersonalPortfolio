import React, { useEffect, useRef, useState } from "react";
import publicImage from "../exports/publicImage";
import { Avatar } from "@mui/material";
import gsap from "gsap";
import { Dialog, DialogContent } from "@mui/material";
// import { secretMessages } from "../exports/secretMessages";
import { mainIconSpinner } from "../animations/mainIconSpinner";

let secretMessages = [];
try {
  secretMessages = require("../exports/secretMessages").secretMessages;
} catch (e) {
  secretMessages = process.env.REACT_APP_SECRET_MESSAGES.split(",");
}

function SiteIcon({ message, setMessage }) {
  const iconRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    mainIconSpinner(tl, iconRef.current);

    return () => {
      tl.kill();
    };
  }, []);

  const handleClick = () => {
    const randomMessage =
      secretMessages[Math.floor(Math.random() * secretMessages.length)];
    setMessage(randomMessage);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar
        onClick={handleClick}
        src={publicImage("pc_markdown.png")}
        alt="main-icon"
        sx={{
          width: 33,
          height: 33,
          position: "absolute",
          right: "1rem",
        }}
        ref={iconRef}
      />
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>{message}</DialogContent>
      </Dialog>
    </>
  );
}

export default SiteIcon;
