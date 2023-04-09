import React from "react";
import { Box, Button, ButtonGroup, Select, MenuItem } from "@mui/material";

function CanvasTools({ setVx, setVy, setRotationSpeed, image, setImage }) {
  return (
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
      <ButtonGroup
        sx={{ backgroundColor: "white" }}
        className="minus-button-group"
      >
        <Button onClick={() => setVx((vX) => vX - 0.1)}>VX</Button>
        <Button onClick={() => setVy((vY) => vY - 0.1)}>VY</Button>
        <Button
          onClick={() =>
            setRotationSpeed((rotationSpeed) => rotationSpeed - 0.01)
          }
        >
          ROT
        </Button>
      </ButtonGroup>
      <ButtonGroup
        sx={{ backgroundColor: "white" }}
        className="image-button-group"
      >
        <Select
          value={image}
          onChange={(event) => setImage(event.target.value)}
        >
          <MenuItem value="ufo">UFO</MenuItem>
          <MenuItem value="casette">Casette</MenuItem>
          <MenuItem value="pc">PC</MenuItem>
        </Select>
      </ButtonGroup>
      <ButtonGroup
        sx={{ backgroundColor: "white" }}
        className="plus-button-group"
      >
        <Button onClick={() => setVx((vX) => vX + 0.1)}>VX</Button>
        <Button onClick={() => setVy((vY) => vY + 0.1)}>VY</Button>
        <Button
          onClick={() =>
            setRotationSpeed((rotationSpeed) => rotationSpeed + 0.01)
          }
        >
          ROT
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default CanvasTools;
