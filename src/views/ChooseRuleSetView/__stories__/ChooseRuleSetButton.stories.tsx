import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ChooseRuleSetButton from '../ChooseRuleSetButton';
import BackgroundIMG from '../../../assets/backgrounds/default.jpg';
import ContentContainer from '../../../components/ContentContainer';

export default {
  title: 'Layout/ChooseRuleSetButton',
  component: ChooseRuleSetButton,
} as ComponentMeta<typeof ChooseRuleSetButton>;

const Template: ComponentStory<typeof ChooseRuleSetButton> = function () {
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
        <ChooseRuleSetButton />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
