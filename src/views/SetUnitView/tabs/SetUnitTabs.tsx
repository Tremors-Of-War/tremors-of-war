import { Box, Tab, Tabs } from "@mui/material";
import React, { FunctionComponent, SyntheticEvent } from "react";
import { TabOption } from "./types";

interface Props {
  handleChange: (tabValue: TabOption) => void;
  value: TabOption;
  showWeaponry?: boolean;
  showArmour?: boolean;
  showMount?: boolean;
  showUpgrades?: boolean;
}

const SetUnitTabs: FunctionComponent<Props> = ({
  handleChange,
  value,
  showWeaponry,
  showArmour,
  showMount,
  showUpgrades,
}) => {
  const onChange = (_: SyntheticEvent, newValue: TabOption) =>
    handleChange(newValue);
  return (
    <Box sx={{ marginBottom: 3, width: "100%" }}>
      <Tabs value={value} onChange={onChange}>
        <Tab value="unitTab" label="UNIT" />
        {showWeaponry && <Tab value="weaponryTab" label="WEAPONRY" />}
        {showArmour && <Tab value="armourTab" label="ARMOUR" />}
        {showMount && <Tab value="mountTab" label="MOUNT" />}
        {showUpgrades && <Tab value="upgradesTab" label="Upgrades" />}
      </Tabs>
    </Box>
  );
};

export default SetUnitTabs;
