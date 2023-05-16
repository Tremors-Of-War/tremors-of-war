import { Radio, Grid, Typography, Collapse, Tooltip } from "@mui/material";
import React, { FunctionComponent } from "react";
import { TransitionGroup } from "react-transition-group";
import {
  MountId,
  ArmourId,
  Model,
  AbilityId,
  WeaponId,
  Mount,
  abilitiesById,
  mountsById,
} from "../../../data";
import SetUnitMountArmour from "./SetUnitMountsArmour";
import SetUnitMountUpgrades from "./SetUnitMountsUpgrades";
import SetUnitMountWeaponry from "./SetUnitMountsWeaponry";
import MountUnitStats from "../../../components/MountUnitStats";

interface Props {
  handleSelect: (selected: MountId) => void;
  mounts: MountId;
  model: Model;
  currentMounts?: MountId;
  handleMountUpgradeSelect: (selected: AbilityId) => void;
  handleMountArmourSelect: (selected: ArmourId) => void;
  handleMountWeaponSelect: (selected: WeaponId) => void;
}

const SetUnitMounts: FunctionComponent<Props> = ({
  handleSelect,
  mounts,
  handleMountArmourSelect,
  handleMountUpgradeSelect,
  model,
  currentMounts,
  handleMountWeaponSelect,
}) => {
  const handleClick = (event: any) => {
    const value = event.target.value as MountId;
    handleSelect(value);
  };

  return (
    <Grid
      padding="8px 16px"
      marginBottom="16px"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
      component={TransitionGroup}
      sx={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212",
        borderRadius: "4px",
      }}
    >
      <Grid
        container
        flexWrap="nowrap"
        direction="row"
        alignItems="center"
        sx={{
          width: "100%",
          gap: "auto",
        }}
      >
        <Grid container direction="row">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              wrap="wrap"
              width="146px"
            >
              {mountsById[mounts].type &&
                mountsById[mounts].type.map((type, key) => (
                  <Typography
                    variant="body2"
                    key={key}
                    sx={{ color: "text.disabled" }}
                  >
                    {type}
                  </Typography>
                ))}
              <Typography>{mounts.replace(/_/g, " ")}</Typography>
              <Typography variant="body1" sx={{ color: "text.disabled" }}>
                {mountsById[mounts].cost} Points
              </Typography>
            </Grid>
            <MountUnitStats
              data={mountsById[mounts] as Mount}
              textSize="body1"
            />

            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              width="100px"
            >
              {mountsById[mounts].abilities.map((ability, index) => (
                <Tooltip key={index} title={abilitiesById[ability].Effects}>
                  <Typography variant="caption">&#8226; {ability}</Typography>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Radio
          checked={currentMounts === mounts}
          value={mounts}
          onClick={handleClick}
          sx={{ height: 1 }}
        />
      </Grid>

      {currentMounts === mounts && (
        <Grid component={Collapse}>
          {mountsById[mounts].armour && (
            <SetUnitMountArmour
              armoury={mountsById[mounts].armour}
              currentMountArmour={model.mountArmour}
              handleSelect={handleMountArmourSelect}
            />
          )}
          {mountsById[mounts].primaryWeaponry &&
            mountsById[mounts].primaryWeaponry.length > 0 && (
              <SetUnitMountWeaponry
                weaponry={mountsById[mounts].primaryWeaponry}
                currentWeaponry={model.mountWeapon}
                handleSelect={handleMountWeaponSelect}
              />
            )}
          {mountsById[mounts].upgrades &&
            mountsById[mounts].upgrades.length > 0 && (
              <SetUnitMountUpgrades
                upgrades={mountsById[mounts].upgrades}
                currentMountUpgrade={model.mountUpgrade}
                handleSelect={handleMountUpgradeSelect}
              />
            )}
        </Grid>
      )}
    </Grid>
  );
};
export default SetUnitMounts;
