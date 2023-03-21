import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import { gsap } from "gsap";

export default function SpinningAvatar({ src }) {
  const avatarRef = useRef(null);

  function handleClick() {
    gsap.to(avatarRef.current, {
      duration: 1,
      ease: "power3.out",
      rotation: "+=720",
      x: "50%",
      y: "-35%",
      onComplete: () => {
        gsap.to(avatarRef.current, {
          duration: 1,
          ease: "power3.out",
          x: "0%",
          y: "0%",
          rotation: 0,
        });
      },
    });
  }

  return (
    <Avatar
      ref={avatarRef}
      className="avatar"
      onClick={handleClick}
      sx={{
        width: "40vmin",
        height: "40vmin",
        alignSelf: "center",
      }}
      src={src}
      title="self"
    />
  );
}
