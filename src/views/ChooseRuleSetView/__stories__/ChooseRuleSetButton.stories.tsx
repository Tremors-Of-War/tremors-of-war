import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import ChooseRuleSetButton from "../ChooseRuleSetButton";
import image from "../../../assets/rulesets/fantasy.jpg";

export default {
  title: "Layout/Component/ChooseRuleSetButton",
  component: ChooseRuleSetButton,
} as ComponentMeta<typeof ChooseRuleSetButton>;

const Template: ComponentStory<typeof ChooseRuleSetButton> = function () {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={(theme) => ({
        width: theme.spacing(48),
        height: theme.spacing(68),
      })}
    >
      <ChooseRuleSetButton
        image={image}
        ruleSetName="FANTASY"
        onClick={action("Click!")}
      />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
