import React from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Theme/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const variants: any[] = [
  { label: "default" },
  { label: "With value", value: "something" },
  { label: "Error", error: true, helperText: "You fool" },
  {
    label: "Adornment",
    InputProps: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
  },
];

const Template: ComponentStory<typeof TextField> = function () {
  return (
    <Grid container spacing={1} gap={1}>
      {variants.map((props: any) => (
        <Grid item>
          <TextField key={props.label} {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
