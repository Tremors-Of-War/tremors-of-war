import { Box, Tab, Tabs } from "@mui/material";
import React, { FunctionComponent } from "react";

interface Props {
  handleChange: (event: any, newValue: string) => void;
  value: string;
  showWeaponry: boolean;
  showArmour: boolean;
  showMount: boolean;
  showUpgrades: boolean;
}

const SetUnitTabs: FunctionComponent<Props> = ({
  handleChange,
  value,
  showWeaponry,
  showArmour,
  showMount,
  showUpgrades
}) => (
  <Box sx={{ marginBottom: 3, width: "100%" }}>
    <Tabs value={value} onChange={handleChange}>
      <Tab value="unitTab" label="UNIT" />
      {showWeaponry && <Tab value="weaponTab" label="WEAPONRY" />}
      {showArmour && <Tab value="armourTab" label="ARMOUR" />}
      {showMount && <Tab value="mountTab" label="MOUNT" />}
      {showUpgrades && <Tab value="upgradesTab" label="Upgrades" />}
    </Tabs>
  </Box>
);

export default SetUnitTabs;
