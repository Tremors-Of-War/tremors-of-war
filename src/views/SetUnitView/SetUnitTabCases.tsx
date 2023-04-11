import { Alert, CircularProgress, Grid } from "@mui/material";
import React, { FunctionComponent } from "react";
import SetUnitUpgrades from "./SetUnitUpgrades";
import { Model, Unit } from "../../types";
import SetUnitUnit from "./SetUnitUnit";
import SetUnitWeaponry from "./SetUnitWeaponry";
import SetUnitArmour from "./SetUnitArmour";
import SetUnitMounts from "./SetUnitMounts";

interface Props {
  tabValue: string;
  model: Model;
  existingModel?: Model;
  setUnitCost: (number: number) => void;
  isDoneLoading: () => boolean;
  setModel: (model: Model) => void;
  blankModel: Model;
  unitOptions: Unit[];
  selectedUnit: string | null;
  setSelectedUnit: (model: string) => void;
}

const SetUnitTabCases: FunctionComponent<Props> = ({
  tabValue,
  model,
  existingModel,
  isDoneLoading,
  setModel,
  blankModel,
  unitOptions,
  selectedUnit,
  setSelectedUnit,
  setUnitCost
}) => (
  <Grid
    container
    maxWidth="6200px"
    maxHeight="390px"
    sx={{
      overflowX: "hidden",
      overflowY: "scroll",
      "::-webkit-scrollbar": {
        display: "none"
      }
    }}
  >
    {(() => {
      switch (tabValue) {
        case "unitTab":
          return (
            <>
              {existingModel !== undefined && model.id === null && (
                <Grid container width="100%" justifyContent="center">
                  <CircularProgress />
                </Grid>
              )}
              {(existingModel === undefined || isDoneLoading()) && (
                <>
                  {unitOptions.map((unit) => (
                    <SetUnitUnit
                      key={unit.name}
                      unit={unit}
                      handleClick={() => {
                        setSelectedUnit(unit.name);
                        setUnitCost(unit.points);
                        setModel({ ...model, unit });
                      }}
                      isSelected={selectedUnit === unit.name}
                    />
                  ))}
                </>
              )}
            </>
          );
        case "weaponTab":
          return (
            <>
              {model.unit?.weaponry && model.unit.weaponry.length > 0 && (
                <SetUnitWeaponry
                  weaponry={model.unit?.weaponry}
                  currentWeaponry={model.handWeapon}
                  dropdownTitle="HAND WEAPON"
                  handleSelect={(handWeapon) => {
                    setModel({ ...model, handWeapon });
                  }}
                />
              )}
              {model.unit?.twoHandWeaponry &&
                model.unit.twoHandWeaponry.length > 0 && (
                  <SetUnitWeaponry
                    weaponry={model.unit?.twoHandWeaponry}
                    currentWeaponry={model.twoHandedWeapon}
                    dropdownTitle="TWO HANDED WEAPON"
                    handleSelect={(twoHandedWeapon) => {
                      setModel({ ...model, twoHandedWeapon });
                    }}
                  />
                )}
              {model.unit?.rangedWeaponry &&
                model.unit.rangedWeaponry.length > 0 && (
                  <SetUnitWeaponry
                    weaponry={model.unit?.rangedWeaponry}
                    currentWeaponry={model.rangedWeapon}
                    dropdownTitle="RANGED WEAPON"
                    handleSelect={(rangedWeapon) => {
                      setModel({ ...model, rangedWeapon });
                    }}
                  />
                )}
              {!model.unit && (
                <Grid container width="100%" alignItems="center">
                  <Alert
                    sx={{ width: "100%" }}
                    variant="outlined"
                    severity="warning"
                  >
                    You must select a Unit before selecting weapons.
                  </Alert>
                </Grid>
              )}
            </>
          );
        case "armourTab":
          return (
            <>
              {model.unit?.armour && model.unit.armour.length > 0 && (
                <SetUnitArmour
                  armoury={model.unit?.armour}
                  currentArmoury={model.armour}
                  dropdownTitle="ARMOUR"
                  handleSelect={(armour) => {
                    setModel({ ...model, armour });
                  }}
                />
              )}
              {model.unit?.shield && model.unit.shield.length > 0 && (
                <SetUnitArmour
                  armoury={model.unit?.shield}
                  currentArmoury={model.shield}
                  dropdownTitle="SHIELD"
                  handleSelect={(shield) => {
                    setModel({ ...model, shield });
                  }}
                />
              )}

              {model.unit?.otherArmour && model.unit.otherArmour.length > 0 && (
                <SetUnitArmour
                  armoury={model.unit?.otherArmour}
                  currentArmoury={model.otherArmour}
                  dropdownTitle="OTHER ARMOUR"
                  handleSelect={(otherArmour) => {
                    setModel({ ...model, otherArmour });
                  }}
                />
              )}
              {model.unit?.helmet && model.unit.helmet.length > 0 && (
                <SetUnitArmour
                  armoury={model.unit?.helmet}
                  currentArmoury={model.helmet}
                  dropdownTitle="HELMET"
                  handleSelect={(helmet) => {
                    setModel({ ...model, helmet });
                  }}
                />
              )}
              {!model.unit && (
                <Grid container width="100%" alignItems="center">
                  <Alert
                    sx={{ width: "100%" }}
                    variant="outlined"
                    severity="warning"
                  >
                    You must select a Unit before selecting armour.
                  </Alert>
                </Grid>
              )}
            </>
          );
        case "mountTab":
          return (
            // eslint-disable-next-line
            <>
              {model.unit?.mounts.map((mounts) => (
                <SetUnitMounts
                  key={mounts}
                  mounts={mounts}
                  currentMounts={model.mounts}
                  handleSelect={(selectedMount) => {
                    if (selectedMount !== model.mounts) {
                      setModel({ ...model, mounts });
                    } else {
                      setModel({
                        ...model,
                        mounts: blankModel.mounts
                      });
                    }
                  }}
                />
              ))}
            </>
          );
        case "upgradesTab":
          return (
            // eslint-disable-next-line
            <>
              {model.unit?.upgrades.map((upgrade) => (
                <SetUnitUpgrades
                  key={upgrade}
                  upgrade={upgrade}
                  currentUpgrades={model.upgrades}
                  handleClick={(selected) => {
                    if (selected) {
                      model.upgrades.push(upgrade);
                      setModel(model);
                    } else {
                      model.upgrades = model.upgrades.filter(
                        (remove) => remove !== upgrade
                      );
                      setModel(model);
                    }
                  }}
                />
              ))}
            </>
          );

        default:
          // eslint-disable-next-line no-console
          return <p>Unknown tab</p>;
      }
    })()}
  </Grid>
);

export default SetUnitTabCases;
