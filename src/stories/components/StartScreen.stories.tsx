import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import StartScreen from '../../components/StartScreen';
import BackgroundIMG from '../../assets/backgrounds/default.jpg';
import ContentContainer from '../../components/ContentContainer';

export default {
  title: 'Layout/StartScreen',
  component: StartScreen,
} as ComponentMeta<typeof StartScreen>;

const Template: ComponentStory<typeof StartScreen> = function () {
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
        <StartScreen />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
