import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import AddUnitsZeroStateView from "../AddUnitsZeroState/AddUnitsZeroStateView";
import BackgroundIMG from "../../../assets/backgrounds/default.jpg";

export default {
  title: "Layout/View/AddUnitsZeroStateView",
  component: AddUnitsZeroStateView,
} as ComponentMeta<typeof AddUnitsZeroStateView>;

const Template: ComponentStory<typeof AddUnitsZeroStateView> = function (
  args: any
) {
  const [warbandTotal, setWarbandTotal] = useState(0);
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
      <AddUnitsZeroStateView
        {...args}
        warbandTotal={warbandTotal}
        setWarbandTotal={setWarbandTotal}
      />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  faction: "Brettonia",
  onClickBack: action("Clicked Back"),
};
