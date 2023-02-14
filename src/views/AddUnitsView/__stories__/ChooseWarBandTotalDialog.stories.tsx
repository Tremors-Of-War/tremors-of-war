import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import ChooseWarBandTotalDialog from '../ChooseWarBandTotalDialog';

export default {
  title: 'Layout/ChooseWarBandTotalDialog',
  component: ChooseWarBandTotalDialog,
} as ComponentMeta<typeof ChooseWarBandTotalDialog>;

const Template: ComponentStory<typeof ChooseWarBandTotalDialog> = function () {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({ height: '100vh', backgroundColor: theme.palette.secondary.dark })}
      >
        <Button onClick={() => setOpen(!open)} variant="contained">
          open dialog
        </Button>
      </Grid>
      <ChooseWarBandTotalDialog open={open} onClose={() => setOpen(!open)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
