import React, { useRef } from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  ButtonGroup,
  Divider,
} from "@mui/material";

function CanvasTools({
  setVx,
  setVy,
  setRotationSpeed,
  image,
  setImage,
  setToolbarHeight,
}) {
  const toolbarRef = useRef(null);

  return (
    <Box
      ref={toolbarRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <Select
        sx={{
          color: "white",
          background: "transparent",
          backdropFilter: "blur(7px) contrast(0.6)",
        }}
        value={image}
        onChange={(event) => setImage(event.target.value)}
      >
        <MenuItem value="ufo">UFO</MenuItem>
        <MenuItem value="casette">Casette</MenuItem>
        <MenuItem value="pc">PC</MenuItem>
      </Select>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "transparent",
          backdropFilter: "blur(7px) contrast(0.6)",
          padding: "0.35rem",
          outline: "solid transparent",
          borderRadius: "20px",
        }}
      >
        <ButtonGroup variant="toolbar" fullWidth={true}>
          <Button onClick={() => setVx((vX) => vX - 0.5)}>VX-</Button>
          <Button onClick={() => setVy((vY) => vY - 0.5)}>VY-</Button>
          <Button
            onClick={() =>
              setRotationSpeed((rotationSpeed) => rotationSpeed - 0.05)
            }
          >
            ROT-
          </Button>
          <Divider orientation="vertical" sx={{ backgroundColor: "#EBB9EA" }} />
          <Button onClick={() => setVx((vX) => vX + 0.5)}>VX+</Button>
          <Button onClick={() => setVy((vY) => vY + 0.5)}>VY+</Button>
          <Button
            onClick={() =>
              setRotationSpeed((rotationSpeed) => rotationSpeed + 0.05)
            }
          >
            ROT+
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default CanvasTools;
