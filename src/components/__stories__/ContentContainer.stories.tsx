import { Typography } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ContentContainer from '../ContentContainer';
import BackgroundIMG from '../../assets/backgrounds/default.jpg';

export default {
  title: 'Layout/ContentContainer',
  component: ContentContainer,
} as ComponentMeta<typeof ContentContainer>;

const Template: ComponentStory<typeof ContentContainer> = function () {
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
        <Typography variant="h1">MARZAAC</Typography>
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
