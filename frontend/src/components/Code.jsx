import { Typography } from "@mui/material";

const Code = ({
  children,
  canvasTop,
  toolbarHeight,
  height = "auto",
  subtractToolbar = false,
}) => (
  <Typography
    component="code"
    sx={{
      fontFamily: "monospace",
      color: "green",
      backgroundColor: "#f4f4f4",
      padding: "0.5rem",
      borderRadius: "0.25rem",
      fontSize: "auto",
      lineHeight: "1.5",
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      background: "black",
      position: "fixed",
      zIndex: 100,
      overflow: "auto",
      width: "fit-content",
      height: height,
      top: `calc(${canvasTop}px - 32px)`,
      left: 0,
    }}
  >
    {children}
  </Typography>
);

export default Code;
