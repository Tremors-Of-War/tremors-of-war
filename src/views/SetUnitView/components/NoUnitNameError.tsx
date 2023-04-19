import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";

export interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

const NoUnitNameError: FunctionComponent<Props> = ({
  onClose,
  open,
  onSave,
}) => {
  const [name, setName] = React.useState("");

  const handleNameChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setName(parsedInputValue);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <Grid
        component={Alert}
        severity="error"
        container
        direction="row"
        alignItems="center"
        justifyContent="Flex-start"
        variant="filled"
        sx={{ width: "100%" }}
      >
        <Typography>No Unit Name</Typography>
      </Grid>
      <DialogContent>
        <DialogContentText>
          You must give your unit a name before saving.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="UNIT NAME"
          fullWidth
          onChange={handleNameChange}
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          disabled={!name}
          variant="contained"
          onClick={() => {
            onClose();
            onSave(name);
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default NoUnitNameError;
