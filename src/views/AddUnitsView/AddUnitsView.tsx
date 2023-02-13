import React from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import ContentContainer from '../../components/ContentContainer';
import ChooseWarBandTotalDialog from './ChooseWarBandTotalDialog';

const AddUnitsView = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <ContentContainer>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h3">add units</Typography>
        </Box>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          gap="10px"
          position="absolute"
          bottom="32px"
          right="32px"
          left="32px"
        >
          <Button variant="outlined">BACK</Button>
          <Button onClick={() => setOpen(!open)} variant="outlined">
            EDIT WARBAND TOTAL
          </Button>
        </Grid>
      </ContentContainer>
      <ChooseWarBandTotalDialog open={open} onClose={() => setOpen(!open)} />
    </>
  );
};

export default AddUnitsView;
