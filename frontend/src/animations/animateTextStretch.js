import gsap from "gsap";
import { CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

export const animateTextStretch = (ref) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.to(ref, {
    duration: 3,
    letterSpacing: "0.5rem",
  });
  tl.to(ref, {
    duration: 2,
    letterSpacing: "0rem",
  });
};
