export function addClickEventListener(ref, onClick) {
  const handleClick = (e) => {
    const { top, left, bottom, right } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const clickedInside =
      clientX >= left &&
      clientX <= right &&
      clientY >= top &&
      clientY <= bottom;
    if (clickedInside) {
      onClick();
    }
  };
  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
}
