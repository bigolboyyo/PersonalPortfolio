import { gsap } from "gsap";

export function mouseClickAnimation(e, circleRef, containerRef) {
  const containerRect = containerRef.current.getBoundingClientRect();
  const x = (e.clientX || e.touches[0].clientX) - containerRect.left;
  const y = (e.clientY || e.touches[0].clientY) - containerRect.top;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.set(circleRef, { x, y, scale: 0, opacity: 0 })
    .to(circleRef, {
      duration: 2,
      scale: 25,
      opacity: 1,
    })
    .set(circleRef, { scale: 0 });

  tl.play();
}
