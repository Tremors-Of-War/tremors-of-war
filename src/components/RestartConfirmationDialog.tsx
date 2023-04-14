import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import React, { FunctionComponent } from "react";

export interface Props {
  open: boolean;
  onClickRestart: () => void;
  onClose: () => void;
}

const NoUnitNameError: FunctionComponent<Props> = ({
  onClickRestart,
  onClose,
  open
}) => {
  const [typeRestart, setTypeRestart] = React.useState("");

  const handleNameChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setTypeRestart(parsedInputValue);
  };

  return (
    <Dialog
      onClose={() => {
        setTypeRestart("");
        onClose();
      }}
      open={open}
    >
      <Grid
        component={Alert}
        severity="warning"
        container
        direction="row"
        alignItems="center"
        justifyContent="Flex-start"
        variant="filled"
        sx={{
          width: "100%",
          color: "#F3F4F6",
          backgroundColor: "#FF8A3C"
        }}
      >
        <Typography>Are you sure?</Typography>
      </Grid>
      <DialogContent>
        <DialogContentText>
          Clicking restart will delete all units from your list and return you
          to the start screen.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Type restart to continue"
          fullWidth
          onChange={handleNameChange}
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setTypeRestart("");
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          disabled={!(typeRestart.toLowerCase() === "restart")}
          variant="contained"
          onClick={onClickRestart}
        >
          Restart
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default NoUnitNameError;
