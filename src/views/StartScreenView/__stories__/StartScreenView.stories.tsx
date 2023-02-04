import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import StartScreenView from '../StartScreenView';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';
import ContentContainer from '../../../components/ContentContainer';

export default {
  title: 'Layout/StartScreen',
  component: StartScreenView,
} as ComponentMeta<typeof StartScreenView>;

const Template: ComponentStory<typeof StartScreenView> = function () {
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
        <StartScreenView />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
