import { Alert, CircularProgress, Grid } from "@mui/material";
import React, { FunctionComponent, useEffect } from "react";
import SetUnitUpgrades from "./SetUnitUpgrades";
import { Abilities, Model, Unit } from "../../types";
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
  onModelChanges: (model: Model) => void;
  blankModel: Model;
  unitOptions: Unit[];
}

const SetUnitTabCases: FunctionComponent<Props> = ({
  tabValue,
  model,
  existingModel,
  blankModel,
  unitOptions,
  isDoneLoading,
  onModelChanges,
  setUnitCost
}) => {
  const [selectedUnit, setSelectedUnit] = React.useState<string | null>(null);

  useEffect(() => {
    if (existingModel && existingModel.unit) {
      setSelectedUnit(existingModel.unit.name);
    }
  }, []);

  return (
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
                {existingModel !== undefined && !isDoneLoading() && (
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
                          onModelChanges({
                            ...blankModel,
                            unit,
                            name: model.name,
                            id: model.id
                          });
                        }}
                        isSelected={selectedUnit === unit.name}
                      />
                    ))}
                  </>
                )}
              </>
            );
          case "weaponryTab":
            return (
              <>
                {model.unit?.weaponry && model.unit.weaponry.length > 0 && (
                  <SetUnitWeaponry
                    weaponry={model.unit?.weaponry}
                    currentWeaponry={model.handWeapon}
                    dropdownTitle="HAND WEAPON"
                    handleSelect={(handWeapon) => {
                      onModelChanges({ ...model, handWeapon });
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
                        onModelChanges({ ...model, twoHandedWeapon });
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
                        onModelChanges({ ...model, rangedWeapon });
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
                      onModelChanges({ ...model, armour });
                    }}
                  />
                )}
                {model.unit?.shield && model.unit.shield.length > 0 && (
                  <SetUnitArmour
                    armoury={model.unit?.shield}
                    currentArmoury={model.shield}
                    dropdownTitle="SHIELD"
                    handleSelect={(shield) => {
                      onModelChanges({ ...model, shield });
                    }}
                  />
                )}

                {model.unit?.otherArmour &&
                  model.unit.otherArmour.length > 0 && (
                    <SetUnitArmour
                      armoury={model.unit?.otherArmour}
                      currentArmoury={model.otherArmour}
                      dropdownTitle="OTHER ARMOUR"
                      handleSelect={(otherArmour) => {
                        onModelChanges({ ...model, otherArmour });
                      }}
                    />
                  )}
                {model.unit?.helmet && model.unit.helmet.length > 0 && (
                  <SetUnitArmour
                    armoury={model.unit?.helmet}
                    currentArmoury={model.helmet}
                    dropdownTitle="HELMET"
                    handleSelect={(helmet) => {
                      onModelChanges({ ...model, helmet });
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
                        onModelChanges({ ...model, mounts });
                      } else {
                        onModelChanges({
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
                        onModelChanges(model);
                      } else {
                        model.upgrades = model.upgrades.filter(
                          (remove: Abilities) => remove !== upgrade
                        );
                        onModelChanges(model);
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
};

export default SetUnitTabCases;
