import { Alert, Snackbar } from "@mui/material";
import React, { FunctionComponent } from "react";

export interface Props {
  open: boolean;
}

const ExceededWarbandTotalAlert: FunctionComponent<Props> = ({ open }) => (
  <Snackbar
    open={open}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
  >
    <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
      You have exceeded your Warband Total.
    </Alert>
  </Snackbar>
);
export default ExceededWarbandTotalAlert;
