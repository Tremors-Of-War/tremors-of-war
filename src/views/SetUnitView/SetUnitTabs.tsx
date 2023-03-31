import { Box, Tab, Tabs } from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
  handleChange: (event: any, newValue: string) => void;
  value: string;
  showMount: boolean;
  showUpgrades: boolean;
}

const SetUnitTabs: FunctionComponent<Props> = ({
  handleChange,
  value,
  showMount,
  showUpgrades,
}) => (
  <Box sx={{ marginBottom: 3, width: "100%" }}>
    <Tabs value={value} onChange={handleChange}>
      <Tab value="unitTab" label="UNIT" />
      <Tab value="weaponTab" label="WEAPONS" />
      <Tab value="armourTab" label="ARMOUR" />
      {showMount && <Tab value="mountTab" label="MOUNT" />}
      {showUpgrades && <Tab value="upgradesTab" label="Upgrades" />}
    </Tabs>
  </Box>
);

export default SetUnitTabs;
