import {
  Box, Button, Dialog, DialogContent, DialogTitle, Grid, TextField,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import theme from '../../app/theme';

export interface Props {
  open: boolean;
  onClose: () => void;
}

const ChooseWarBandTotalDialog: FunctionComponent<Props> = ({ onClose, open }) => (
  <Dialog onClose={onClose} open={open} sx={{ minHeight: 188, minWidth: 444 }}>
    <DialogTitle color={theme.palette.primary.main}>WARBAND TOTAL</DialogTitle>
    <Grid container>
      <DialogContent sx={{ padding: '0px 24px' }}>
        <Box sx={{ minWidth: 444 }}>
          <TextField
            autoFocus
            variant="filled"
            id="warband-total"
            label="CHOOSE VALUE"
            type="number"
            color="secondary"
            fullWidth
          />
        </Box>
        <Grid container padding="8px" justifyContent="flex-end" alignItems="flex-end">
          <Button onClick={onClose}>SAVE</Button>
        </Grid>
      </DialogContent>
    </Grid>
  </Dialog>
);

export default ChooseWarBandTotalDialog;
