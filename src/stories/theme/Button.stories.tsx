import { Grid, Button } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Theme/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const variants: any[] = [
  <Button>Default</Button>,
  <Button disabled>Disabled</Button>,
  <Button size="large">Large</Button>,
  <Button size="medium">Medium</Button>,
  <Button size="small">Small</Button>,
  <Button variant="text">Text</Button>,
  <Button variant="contained">Contained</Button>,
  <Button variant="outlined">Outlined</Button>,
  <Button color="primary">Primary Color</Button>,
  <Button color="secondary">Secondary Color</Button>,
  <Button color="info">Info Color</Button>,
  <Button color="warning">Warning Color</Button>,
  <Button color="error">Error Color</Button>,
];

const Template: ComponentStory<typeof Button> = function () {
  return (
    <Grid container direction="column" spacing={1} gap={1}>
      {variants.map((button) => (
        <Grid item>{button}</Grid>
      ))}
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
