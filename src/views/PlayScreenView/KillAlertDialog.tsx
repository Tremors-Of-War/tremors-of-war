import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { Model } from "../../types";

export interface Props {
  open: boolean;
  onClose: () => void;
  onActiveChange: (modelId: Model) => void;
  model: Model;
}

const KillAlertDialog: FunctionComponent<Props> = ({
  onClose,
  open,
  onActiveChange,
  model
}) => (
  <Dialog onClose={onClose} open={open}>
    <Grid
      component={Alert}
      severity="warning"
      container
      direction="row"
      alignItems="center"
      justifyContent="Flex-start"
      variant="filled"
      sx={{ width: "100%", color: "#40392d", backgroundColor: "#FF8A3C" }}
    >
      <Typography>Kill {model.name}?</Typography>
    </Grid>
    <DialogContent>
      <DialogContentText>
        The time has come for {model.name}&apos;s untimely demise.
      </DialogContentText>
      <DialogContentText>
        Set&nbsp;
        {model.name}&apos;s alive status as &quot;not&quot;?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button
        variant="contained"
        onClick={() => {
          onClose();
          onActiveChange(model);
        }}
      >
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);
export default KillAlertDialog;
