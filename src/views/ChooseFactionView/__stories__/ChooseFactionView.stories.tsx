import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import ChooseFactionView from "../ChooseFactionView";
import BackgroundIMG from "../../../assets/backgrounds/default.jpg";

export default {
  title: "Layout/View/ChooseFactionView",
  component: ChooseFactionView
} as ComponentMeta<typeof ChooseFactionView>;

const Template: ComponentStory<typeof ChooseFactionView> = function (
  args: any
) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `url(${BackgroundIMG})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <ChooseFactionView {...args} />
    </Grid>
  );
};

export const Fantasy = Template.bind({});
Fantasy.args = {
  ruleSet: "fantasy",
  onClickBack: action("Clicked Back!"),
  setFaction: action("Faction Selected")
};

export const DarkAges = Template.bind({});
DarkAges.args = {
  ruleSet: "dark_ages",
  onClickBack: action("Clicked Back!"),
  setFaction: action("Faction Selected")
};
