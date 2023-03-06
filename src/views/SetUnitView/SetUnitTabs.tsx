import { Box, Tab, Tabs } from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
  handleChange: (event: any, newValue: number) => void;
  value: number;
}

const SetUnitTabs: FunctionComponent<Props> = ({ handleChange, value }) => (
  <Box sx={{ marginBottom: 3, width: "100%" }}>
    <Tabs value={value} onChange={handleChange}>
      <Tab label="UNIT" />
      <Tab label="WEAPONS" />
      <Tab label="ARMOUR" />
      <Tab label="MOUNT" />
    </Tabs>
  </Box>
);

export default SetUnitTabs;
