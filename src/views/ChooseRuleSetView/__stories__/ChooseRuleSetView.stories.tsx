import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ChooseRuleSetView from '../ChooseRuleSetView';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';

export default {
  title: 'Layout/ChooseRuleSetView',
  component: ChooseRuleSetView,
} as ComponentMeta<typeof ChooseRuleSetView>;

const Template: ComponentStory<typeof ChooseRuleSetView> = function () {
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
      <ChooseRuleSetView />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
