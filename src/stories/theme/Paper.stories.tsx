import { Grid, Paper, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Theme/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

const elevations = [...new Array(10).keys()];

const Template: ComponentStory<typeof Paper> = function () {
  return (
    <Grid container spacing={1} gap={1}>
      {elevations.map((elevation) => (
        <Grid
          item
          key={elevation}
          elevation={elevation}
          component={Paper}
          width={300}
          height={300}
        >
          <Typography>Elevation: {elevation}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
