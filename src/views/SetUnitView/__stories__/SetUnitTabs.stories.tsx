import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { action } from "@storybook/addon-actions";
import SetUnitTabs from "../tabs/SetUnitTabs";
import BackgroundIMG from "../../../assets/backgrounds/default.jpg";
import ContentContainer from "../../../components/ContentContainer";

export default {
  title: "Layout/Component/SetUnitTabs",
  component: SetUnitTabs,
} as ComponentMeta<typeof SetUnitTabs>;

const Template: ComponentStory<typeof SetUnitTabs> = function () {
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
        <SetUnitTabs
          value="unitTab"
          handleChange={() => action("Tab change")}
        />
      </ContentContainer>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
