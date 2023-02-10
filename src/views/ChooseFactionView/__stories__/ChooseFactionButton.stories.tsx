import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ChooseFactionButton from '../ChooseFactionButton';
import BackgroundIMG from '../../../assets/factions/fantasy/brettonia.jpg';

export default {
  title: 'Layout/ChooseFactionButton',
  component: ChooseFactionButton,
} as ComponentMeta<typeof ChooseFactionButton>;

const Template: ComponentStory<typeof ChooseFactionButton> = function () {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={(theme) => ({
        width: theme.spacing(48),
        height: theme.spacing(12),
      })}
    >
      <ChooseFactionButton image={BackgroundIMG} factionName="BRETTONIA" />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
