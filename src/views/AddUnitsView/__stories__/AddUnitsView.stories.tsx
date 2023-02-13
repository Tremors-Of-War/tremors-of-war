import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import AddUnitsView from '../AddUnitsView';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';

export default {
  title: 'Layout/AddUnitsView',
  component: AddUnitsView,
} as ComponentMeta<typeof AddUnitsView>;

const Template: ComponentStory<typeof AddUnitsView> = function () {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `url(${BackgroundIMG})`,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <AddUnitsView />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
