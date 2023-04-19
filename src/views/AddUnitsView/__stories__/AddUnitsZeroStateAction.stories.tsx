import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import AddUnitsZeroStateAction from "../AddUnitsZeroState/AddUnitsZeroStateAction";
import BackgroundIMG from "../../../assets/backgrounds/default.jpg";
import ContentContainer from "../../../components/ContentContainer";

export default {
  title: "Layout/Component/AddUnitsZeroStateAction",
  component: AddUnitsZeroStateAction,
} as ComponentMeta<typeof AddUnitsZeroStateAction>;

const Template: ComponentStory<typeof AddUnitsZeroStateAction> = function () {
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
      <ContentContainer>
        <AddUnitsZeroStateAction onClickAdd={() => action("add unit")} />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
