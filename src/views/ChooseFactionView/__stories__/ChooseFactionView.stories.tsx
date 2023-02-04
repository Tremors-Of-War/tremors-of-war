import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ChooseFactionView from '../ChooseFaction';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';
import ContentContainer from '../../../components/ContentContainer';

export default {
  title: 'Layout/StartScreen',
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
      <ContentContainer>
        <ChooseFactionView />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
