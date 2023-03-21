import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import { gsap } from "gsap";

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
      // Leaving this here for an example of .then chaining as opposed to onComplete()

      // .then(() =>
      //   gsap.to(avatarRef.current, {
      //     duration: 0.25,
      //     ease: "power3.out",
      //     x: "-50%",
      //     y: "-35%",
      //     rotation: "-=540",
      //   })
      // )
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
