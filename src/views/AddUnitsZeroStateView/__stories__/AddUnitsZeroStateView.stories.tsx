import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import AddUnitsZeroStateView from "../AddUnitsZeroStateView";
import BackgroundIMG from "../../../assets/backgrounds/default.jpg";

export default {
  title: "Layout/View/AddUnitsZeroStateView",
  component: AddUnitsZeroStateView,
} as ComponentMeta<typeof AddUnitsZeroStateView>;

const Template: ComponentStory<typeof AddUnitsZeroStateView> = function (
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
        backgroundSize: "cover",
      }}
    >
      <AddUnitsZeroStateView {...args} />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = { faction: "BRETTONIA" };
