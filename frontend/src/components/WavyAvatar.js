import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin);

export default function WavyAvatar({ src }) {
  const [rotation, setRotation] = useState(0);

  function handleClick() {
    gsap.to(".avatar", {
      rotation: rotation + 1440,
      duration: 1,
      ease: "none",
      onComplete: () => {
        setRotation(rotation + 360);
        gsap.set(".avatar", { rotation: rotation });
      },
    });
  }

  return (
    <Avatar
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
