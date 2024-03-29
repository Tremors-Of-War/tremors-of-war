import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import ChooseFactionButton from "../ChooseFactionButton";
import BackgroundIMG from "../../../assets/factions/fantasy/brettonia.jpg";

export default {
  title: "Layout/Component/ChooseFactionButton",
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
      <ChooseFactionButton
        image={BackgroundIMG}
        name="BRETTONIA"
        id="Brettonia"
        onClick={action("Click!")}
      />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
