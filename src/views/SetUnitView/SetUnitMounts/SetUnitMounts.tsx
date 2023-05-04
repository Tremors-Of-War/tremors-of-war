import { Radio, Grid, Typography, Collapse } from "@mui/material";
import React, { FunctionComponent } from "react";
import { TransitionGroup } from "react-transition-group";
import data from "../../../data.json";
import { Mounts, Armour, Model, Abilities } from "../../../types";
import SetUnitMountsStats from "./SetUnitMountsStats";
import SetUnitMountArmour from "./SetUnitMountsArmour";
import SetUnitMountUpgrades from "./SetUnitMountsUpgrades";

interface Props {
  handleSelect: (selected: Mounts) => void;
  mounts: Mounts;
  model: Model;
  currentMounts?: Mounts;
  handleMountUpgradeSelect: (selected: Abilities) => void;
  handleMountArmourSelect: (selected: Armour) => void;
}

const SetUnitMounts: FunctionComponent<Props> = ({
  handleSelect,
  mounts,
  handleMountArmourSelect,
  handleMountUpgradeSelect,
  model,
  currentMounts,
}) => {
  const handleClick = (event: any) => {
    const value = event.target.value as Mounts;
    handleSelect(value);
  };

  return (
    <Grid
      padding="8px 16px"
      marginBottom="16px"
      alignItems="center"
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
              justifyContent="flex-start"
              wrap="wrap"
              width="176px"
            >
              {data.mounts[mounts].type.map((type, key) => (
                <>
                  <Typography
                    variant="body2"
                    key={key}
                    sx={{ color: "text.disabled" }}
                  >
                    {type}
                  </Typography>
                </>
              ))}
              <Typography>{mounts.replace(/_/g, " ")}</Typography>
              <Typography variant="body1" sx={{ color: "text.disabled" }}>
                {data.mounts[mounts].cost} Points
              </Typography>
            </Grid>
            <SetUnitMountsStats mounts={mounts} />
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
          {data.mounts[mounts].armour && (
            <SetUnitMountArmour
              armoury={data.mounts[mounts].armour}
              currentMountArmour={model.mountArmour}
              handleSelect={handleMountArmourSelect}
            />
          )}
          {data.mounts[mounts].upgrades &&
            data.mounts[mounts].upgrades.length > 0 && (
              <SetUnitMountUpgrades
                upgrades={data.mounts[mounts].upgrades}
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
