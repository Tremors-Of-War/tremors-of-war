import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import RulesCategories from "./RulesCategories";

export interface Props {
  open: boolean;
  onClose: () => void;
}

const RulesDialog: FunctionComponent<Props> = ({ onClose, open }) => {
  const background =
    "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212";
  return (
    <Dialog onClose={onClose} open={open}>
      <Typography
        variant="h3"
        sx={{
          background,
          padding: "16px 24px 0px",
        }}
      >
        Rules
      </Typography>

      <DialogContent
        sx={{
          background,
          overflowX: "hidden",
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <RulesCategories />
      </DialogContent>
      <DialogActions
        sx={{
          background,
        }}
      >
        <Button sx={{ margin: 2 }} variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RulesDialog;
