import { gsap } from "gsap";

export function handleMouseClick(e, ref, containerRef) {
  const container = containerRef.current;
  const x = (e.clientX || e.touches[0].clientX) - container.offsetLeft;
  const y = (e.clientY || e.touches[0].clientY) - container.offsetTop;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.set(ref, { x, y, scale: 0, opacity: 0 })
    .to(ref, {
      duration: 0.2,
      scale: 1.25,
      opacity: 1,
    })
    .set(ref, { scale: 0 });

  tl.play();
}
