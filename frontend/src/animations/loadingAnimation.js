import { gsap } from "gsap";

export const loadingAnimation = (ref) => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to(ref, {
    rotate: 360,
    y: "25vh",
    duration: 1,
    ease: "none",
  })
    .to(ref, {
      rotate: -360,
      y: "-25vh",
      duration: 1,
      ease: "none",
    })
    .to(ref, {
      rotation: 0,
      y: 0,
      duration: 1,
      ease: "none",
    });
};
