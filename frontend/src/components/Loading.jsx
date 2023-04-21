import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import publicImage from "../exports/publicImage";
const LoadingIcon = publicImage("icon-loading.png");

const Loading = ({ loading, width = "64px" }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    if (loading) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(loadingRef.current, {
        rotate: 360,
        duration: 1.5,
        ease: "none",
      });
    }
  }, [loading]);

  return loading ? (
    <img
      ref={loadingRef}
      alt="loading icon"
      src={LoadingIcon}
      style={{ width: width, objectFit: "contain" }}
    />
  ) : null;
};

export default Loading;
