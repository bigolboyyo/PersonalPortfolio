import gsap from "gsap";

export const animateBubbles = (ref, exclude = false) => {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(
    ref,
    { y: "-=200", opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.2, ease: "back.out(1.7)" }
  ).then(() => {
    if (!exclude) {
      gsap.to(ref, {
        duration: 1,
        x: "+=5" && "-=5",
        y: "+=3" && "-=3",
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    } else return;
  });
};
