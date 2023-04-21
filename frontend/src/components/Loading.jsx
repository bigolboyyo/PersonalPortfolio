import React, { useRef, useEffect } from "react";
import publicImage from "../exports/publicImage";
import { loadingAnimation } from "../animations/loadingAnimation";
const pcIcon = publicImage("pc.png");

const Loading = ({ loading, width = "64px" }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    if (loading) {
      loadingAnimation(loadingRef.current);
    }
  }, [loading]);

  return loading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        ref={loadingRef}
        alt="loading icon"
        src={pcIcon}
        style={{ width: width, objectFit: "contain" }}
      />
    </div>
  ) : null;
};

export default Loading;
