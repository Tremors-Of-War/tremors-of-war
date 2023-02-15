import React, { FunctionComponent } from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ContentContainer from '../../components/ContentContainer';
import ChooseWarBandTotalDialog from '../../components/ChooseWarBandTotalDialog';
import AddUnitsZeroState from './AddUnitsZeroStateAction';

interface Props {
  faction: string;
}

const AddUnitsView: FunctionComponent<Props> = ({ faction }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <ContentContainer>
        <Grid
          container
          gap="8px"
          direction="column"
          justifyContent="flex-end"
          sx={{ marginTop: 2 }}
        >
          <Typography variant="h3">{faction}</Typography>
          <Typography variant="h5">UNITS:</Typography>
        </Grid>
        <Grid>
          <AddUnitsZeroState />
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between">
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
