import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export interface Props {
  open: boolean;
  onClose: () => void;
}

const AddUnitsZeroState = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    gap="10px"
    sx={{ height: '100%', width: '100%' }}
  >
    <Typography>You do not have any units.</Typography>
    <Button size="large" startIcon={<AddIcon />} variant="contained">
      Add Unit
    </Button>
  </Grid>
);

export default AddUnitsZeroState;
