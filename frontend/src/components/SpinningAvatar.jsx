import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import { gsap } from "gsap";
import { Tooltip } from "@mui/material";

export default function SpinningAvatar({ src }) {
  const avatarRef = useRef(null);

  function handleClick() {
    gsap
      .to(avatarRef.current, {
        duration: 0.5,
        ease: "power3.out",
        rotation: "+=1440",
        x: "25%",
        y: "-25%",
      })
      .then(() =>
        gsap.to(avatarRef.current, {
          duration: 0.15,
          ease: "power3.out",
          x: "0%",
          y: "0%",
          rotation: 0,
        })
      );
  }

  return (
    <Tooltip title="Click Me!" followCursor>
      <Avatar
        ref={avatarRef}
        className="avatar"
        onClick={handleClick}
        sx={{
          width: "33.5vmin",
          height: "33.5vmin",
          alignSelf: "center",
        }}
        src={src}
      />
    </Tooltip>
  );
}
