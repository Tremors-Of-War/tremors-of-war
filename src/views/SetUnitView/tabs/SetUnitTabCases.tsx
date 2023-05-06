import { Alert, CircularProgress, Grid } from "@mui/material";
import React, { FunctionComponent, useEffect } from "react";
import SetUnitUpgrades from "../SetUnitUpgrades/SetUnitUpgrades";
import { Abilities, Model, Unit } from "../../../types";
import SetUnitUnit from "../SetUnitUnit/SetUnitUnit";
import SetUnitWeaponry from "../SetUnitWeaponry/SetUnitWeaponry";
import SetUnitArmour from "../SetUnitArmour/SetUnitArmour";
import SetUnitMounts from "../SetUnitMounts/SetUnitMounts";

interface Props {
  tabValue: string;
  model: Model;
  existingModel?: Model;
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
}) => {
  const [selectedUnit, setSelectedUnit] = React.useState<string | null>(null);

  useEffect(() => {
    if (existingModel && existingModel.unit) {
      setSelectedUnit(existingModel.unit.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          display: "none",
        },
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
                          onModelChanges({
                            ...blankModel,
                            unit,
                            name: model.name,
                            id: model.id,
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
                {model.unit?.primaryWeaponry &&
                  model.unit.primaryWeaponry.length > 0 && (
                    <SetUnitWeaponry
                      weaponry={model.unit?.primaryWeaponry}
                      currentWeaponry={model.primaryWeaponry}
                      dropdownTitle="PRIMARY WEAPON"
                      handleSelect={(primaryWeaponry) => {
                        onModelChanges({ ...model, primaryWeaponry });
                      }}
                    />
                  )}
                {model.unit?.secondaryWeaponry &&
                  model.unit.secondaryWeaponry.length > 0 && (
                    <SetUnitWeaponry
                      weaponry={model.unit?.secondaryWeaponry}
                      currentWeaponry={model.secondaryWeaponry}
                      dropdownTitle="SECONDARY WEAPON"
                      handleSelect={(secondaryWeaponry) => {
                        onModelChanges({ ...model, secondaryWeaponry });
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
                    model={model}
                    mounts={mounts}
                    currentMounts={model.mounts}
                    handleSelect={(selectedMount) => {
                      if (selectedMount !== model.mounts) {
                        onModelChanges({
                          ...model,
                          mounts,
                          mountArmour: blankModel.mountArmour,
                          mountWeapon: blankModel.mountWeapon,
                          mountUpgrade: blankModel.mountUpgrade,
                        });
                      } else {
                        onModelChanges({
                          ...model,
                          mounts: blankModel.mounts,
                          mountArmour: blankModel.mountArmour,
                          mountWeapon: blankModel.mountWeapon,
                          mountUpgrade: blankModel.mountUpgrade,
                        });
                      }
                    }}
                    handleMountArmourSelect={(mountArmour) => {
                      onModelChanges({ ...model, mountArmour });
                    }}
                    handleMountUpgradeSelect={(mountUpgrade) => {
                      onModelChanges({ ...model, mountUpgrade });
                    }}
                    handleMountWeaponSelect={(mountWeapon) => {
                      onModelChanges({ ...model, mountWeapon });
                    }}
                  />
                ))}
              </>
            );
          case "upgradesTab":
            return (
              // eslint-disable-next-line
              <>
                {model.unit?.upgrades.map((upgrade: Abilities) => (
                  <SetUnitUpgrades
                    key={upgrade}
                    upgrade={upgrade}
                    currentUpgrades={model.upgrades}
                    handleClick={(selected) => {
                      if (selected) {
                        onModelChanges({
                          ...model,
                          upgrades: [...model.upgrades, upgrade],
                        });
                      } else {
                        const newUpgrades = model.upgrades.filter(
                          (remove: Abilities) => remove !== upgrade
                        );
                        onModelChanges({ ...model, upgrades: newUpgrades });
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
