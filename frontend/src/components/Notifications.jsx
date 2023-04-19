import React from "react";
import { Snackbar, Alert } from "@mui/material";

function Notifications({ open, setOpen, severity, responseMsg }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={(e) => handleClose(e)}
      sx={{ justifyContent: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{
          bgcolor: (theme) => theme.palette[severity].main,
          color: "white",
          position: "fixed",
          top: "50vmin",
        }}
      >
        {responseMsg}
      </Alert>
    </Snackbar>
  );
}

export default Notifications;
