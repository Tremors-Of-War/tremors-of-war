import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import AddUnitsZeroState from '../AddUnitsZeroState';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';
import ContentContainer from '../../../components/ContentContainer';

export default {
  title: 'Layout/AddUnitsZeroState',
  component: AddUnitsZeroState,
} as ComponentMeta<typeof AddUnitsZeroState>;

const Template: ComponentStory<typeof AddUnitsZeroState> = function () {
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
        <AddUnitsZeroState />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
