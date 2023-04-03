import React from "react";
import { Button, Avatar } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const GithubLink = ({ name, href }) => {
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
        <GitHub />
      </Avatar>
    </Button>
  );
};

export default GithubLink;
