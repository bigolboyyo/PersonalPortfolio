import { Typography } from "@mui/material";

const Code = ({ children, canvasTop, height = "auto" }) => (
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
      position: "absolute",
      top: canvasTop,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      overflow: "auto",
      width: "fit-content",
      margin: "0 auto",
      height: height,
    }}
  >
    {children}
  </Typography>
);

export default Code;
