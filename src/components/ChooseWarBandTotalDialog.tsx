import {
  Alert,
  Box,
  Button,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField
} from "@mui/material";
import React, { FunctionComponent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../app/theme";
import { MAX_WARBAND_TOTAL } from "../constants";

export interface Props {
  open: boolean;
  onClose: (value: number) => void;
  warbandTotal: number;
}

const ChooseWarBandTotalDialog: FunctionComponent<Props> = ({
  onClose,
  warbandTotal,
  open
}) => {
  const [value, setValue] = React.useState<number>(warbandTotal);
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  const handleClose = () => onClose(warbandTotal);

  const handleSave = () => onClose(value);

  const handleChange = (event: any) => {
    const parsedInputValue = parseInt(event.target.value, 10);
    if (parsedInputValue > MAX_WARBAND_TOTAL) {
      setValue(MAX_WARBAND_TOTAL);
      setOpenAlert(true);
    } else {
      setOpenAlert(false);
      setValue(parsedInputValue);
    }
  };

  return (
    <Dialog
      onChange={handleChange}
      onClose={handleClose}
      open={open}
      sx={{ minHeight: 188, minWidth: 444 }}
    >
      <Box sx={{ width: "100%" }}>
        <Collapse sx={{ margin: 0 }} in={openAlert}>
          <Alert
            variant="filled"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(!openAlert);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Maximum Warband Total is {MAX_WARBAND_TOTAL.toLocaleString("en-US")}
          </Alert>
        </Collapse>
      </Box>
      <DialogTitle color={theme.palette.primary.main}>
        WARBAND TOTAL
      </DialogTitle>
      <Grid container>
        <DialogContent sx={{ padding: "0px 24px" }}>
          <Box sx={{ minWidth: 444 }}>
            <TextField
              autoFocus
              variant="filled"
              id="value"
              value={value}
              label="CHOOSE VALUE"
              type="number"
              color="secondary"
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Grid
            container
            padding="8px"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button onClick={handleSave}>SAVE</Button>
          </Grid>
        </DialogContent>
      </Grid>
    </Dialog>
  );
};
export default ChooseWarBandTotalDialog;
