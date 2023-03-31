import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import SetUnitView from "../SetUnitView";
import BackgroundIMG from "../../../assets/backgrounds/default.jpg";

export default {
  title: "Layout/View/SetUnitView",
  component: SetUnitView,
} as ComponentMeta<typeof SetUnitView>;

const Template: ComponentStory<typeof SetUnitView> = function (args: any) {
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
        backgroundSize: "cover",
      }}
    >
      <SetUnitView {...args} />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClickBack: action("Clicked Back"),
};
