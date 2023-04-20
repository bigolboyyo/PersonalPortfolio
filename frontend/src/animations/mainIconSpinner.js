export const mainIconSpinner = (tl, ref) => {
  const randomSpin = () => Math.floor(Math.random() * 721) - 180;
  const randomX = () => {
    const xValue = Math.random() * 95 - 75;
    return xValue + "%";
  };

  tl.to(ref, {
    duration: 1,
    rotation: randomSpin(),
    x: randomX(),
    ease: "power1.inOut",
    yoyo: true,
  })
    .to(ref, {
      duration: 2,
      rotation: randomSpin(),
      x: randomX(),
      ease: "power1.inOut",
      yoyo: true,
    })
    .to(ref, {
      duration: 3,
      rotation: randomSpin(),
      x: randomX(),
      ease: "power1.inOut",
      yoyo: true,
    })
    .to(ref, {
      duration: 0.5,
      rotation: randomSpin(),
      x: randomX(),
      ease: "power1.inOut",
      yoyo: true,
    })
    .to(ref, {
      duration: 1,
      rotation: randomSpin(),
      x: randomX(),
      ease: "power1.inOut",
      yoyo: true,
    });
};
