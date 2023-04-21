import React from "react";
import { Button, Avatar, Tooltip } from "@mui/material";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

function DeployLink({ name, href }) {
  return (
    <Button
      key={name}
      component={"a"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="text"
      color="inherit"
      sx={{
        width: "auto",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        borderRadius: "25%",
        border: "solid transparent",
        backgroundClip: "padding-box",
      }}
    >
      <Tooltip title={name}>
        <Avatar sx={{ backgroundColor: "#EBB9EA" }}>
          <OpenInBrowserIcon />
        </Avatar>
      </Tooltip>
    </Button>
  );
}

export default DeployLink;
