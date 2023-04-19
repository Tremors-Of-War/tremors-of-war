import { Alert, Snackbar } from "@mui/material";
import React, { FunctionComponent } from "react";

const DevelopmentAlert: FunctionComponent = () => (
  <Snackbar
    open
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
  >
    <Alert
      severity="warning"
      variant="filled"
      sx={{
        color: "#40392d",
        backgroundColor: "#FF8A3C",
      }}
    >
      Tremors of War is currently in development.
    </Alert>
  </Snackbar>
);
export default DevelopmentAlert;
