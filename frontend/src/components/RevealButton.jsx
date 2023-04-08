import React from "react";
import { Button } from "@mui/material";

function RevealButton({ setShowCode, showCode }) {
  return showCode ? (
    <Button onClick={() => setShowCode(false)}>Hide Code</Button>
  ) : (
    <Button onClick={() => setShowCode(true)}>Show Code</Button>
  );
}

export default RevealButton;
