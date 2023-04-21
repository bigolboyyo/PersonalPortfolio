import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Power2 } from "gsap";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export const snappingAnimation = (tl, ref, intro, about, partOne, partTwo) => {
  tl.to(ref, {
    scrollTo: intro,
    duration: 0.0001,
    ease: Power2.easeInOut,
  })
    .to(ref, {
      scrollTo: about,
      duration: 0.0001,
      ease: Power2.easeInOut,
    })
    .to(ref, {
      scrollTo: partOne,
      duration: 0.0001,
      ease: Power2.easeInOut,
    })
    .to(ref, {
      scrollTo: partTwo,
      duration: 0.0001,
      ease: Power2.easeInOut,
    });
  ScrollTrigger.create({
    trigger: ref,
    start: "top top",
    end: "bottom bottom",
    animation: tl,
    snap: 1 / 3,
    duration: 0.0001,
    snapDelay: 0,
  });
};
