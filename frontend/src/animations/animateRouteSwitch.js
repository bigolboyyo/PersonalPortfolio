import gsap from "gsap";

export const animateRouteSwitch = (newRoute, ref) => {
  return new Promise((resolve) => {
    gsap.fromTo(
      ref,
      { x: "100%" },
      { x: "0%", duration: 0.5, onComplete: resolve }
    );
  });
};
