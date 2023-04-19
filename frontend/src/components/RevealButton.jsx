import React from "react";
import { Button } from "@mui/material";

function RevealButton({ setShowCode, showCode }) {
  return showCode ? (
    <Button variant="code" onClick={() => setShowCode(false)}>
      Hide Code
    </Button>
  ) : (
    <Button variant="code" onClick={() => setShowCode(true)}>
      Show Code
    </Button>
  );
}

export default RevealButton;
