import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ChooseFactionView from '../ChooseFaction';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';

export default {
  title: 'Layout/ChooseFactionView',
  component: ChooseFactionView,
} as ComponentMeta<typeof ChooseFactionView>;

const Template: ComponentStory<typeof ChooseFactionView> = function () {
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
      <ChooseFactionView />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
