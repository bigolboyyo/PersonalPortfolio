import React from "react";
import { Button, Avatar } from "@mui/material";
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
      }}
    >
      <Avatar>
        <OpenInBrowserIcon />
      </Avatar>
    </Button>
  );
}

export default DeployLink;
