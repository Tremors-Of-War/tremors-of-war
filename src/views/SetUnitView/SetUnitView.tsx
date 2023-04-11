import React, { FunctionComponent, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Typography,
  TextField,
  Tooltip,
  Snackbar,
  CircularProgress,
  Alert
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../components/ContentContainer";
import SetUnitTabs from "./SetUnitTabs";
import SetUnitUnit from "./SetUnitUnit";
import SetUnitUnitHeader from "./SetUnitUnitHeader";
import { Faction, Unit, Model } from "../../types";
import data from "../../data.json";
import SetUnitArmour from "./SetUnitArmour";
import SetUnitUpgrades from "./SetUnitUpgrades";
import SetUnitWeaponry from "./SetUnitWeaponry";
import SetUnitMounts from "./SetUnitMounts";
import NoUnitNameError from "../../components/NoUnitNameError";

interface Props {
  faction: Faction;
  existingModel?: Model;
  onClickBack: () => void;
  warbandTotal: number;
  onClickSave: (model: Model) => void;
}

const blankModel: Model = {
  id: "",
  unit: null,
  cost: 0,
  name: "",
  armour: undefined,
  shield: undefined,
  otherArmour: undefined,
  handWeapon: undefined,
  twoHandedWeapon: undefined,
  rangedWeapon: undefined,
  helmet: undefined,
  upgrades: [],
  mounts: undefined
};

const SetUnitView: FunctionComponent<Props> = ({
  faction,
  onClickBack,
  warbandTotal,
  existingModel,
  onClickSave
}) => {
  const [tabValue, setTabValue] = React.useState("unitTab");
  const [selectedUnit, setSelectedUnit] = React.useState<string | null>(null);
  const [unitCost, setUnitCost] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const [model, setModel] = React.useState<Model>(blankModel);
  const [openNameAlert, setOpenNameAlert] = React.useState<boolean>(false);

  const handleTabChange = (event: any, newValue: string) => {
    setTabValue(newValue);
  };

  const handleNameChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setModel({ ...model, name: parsedInputValue });
  };
  const checkWeaponry = () => {
    if (
      (model?.unit?.weaponry && model.unit.weaponry.length > 0) ||
      (model?.unit?.rangedWeaponry && model.unit.rangedWeaponry.length > 0) ||
      (model?.unit?.twoHandWeaponry && model.unit.twoHandWeaponry.length > 0)
    ) {
      return true;
    }
    return false;
  };

  const handleSave = () => {
    const value = uuidv4();
    if (!model.name) {
      setOpenNameAlert(true);
    } else if (model.id !== "") {
      onClickSave(model);
    } else {
      onClickSave({ ...model, id: value });
    }
  };

  const calculatePointsRemaining = useMemo(() => {
    const value = warbandTotal - unitCost;
    if (value < 0) {
      setOpenAlert(true);
    } else {
      setOpenAlert(false);
    }
    return value;
  }, [warbandTotal, unitCost]);

  useEffect(() => {
    model.cost = 0;
    if (model.unit) {
      model.cost += model.unit.points;
      if (model.helmet) {
        model.cost += data.armour[model.helmet].Cost;
      }
      if (model.armour) {
        model.cost += data.armour[model.armour].Cost;
      }
      if (model.shield) {
        model.cost += data.armour[model.shield].Cost;
      }
      if (model.otherArmour) {
        model.cost += data.armour[model.otherArmour].Cost;
      }
      if (model.mounts) {
        model.cost += data.mounts[model.mounts].Points;
      }
      if (model.handWeapon) {
        model.cost += data.weapons[model.handWeapon].Cost;
      }
      if (model.rangedWeapon) {
        model.cost += data.weapons[model.rangedWeapon].Cost;
      }
      if (model.twoHandedWeapon) {
        model.cost += data.weapons[model.twoHandedWeapon].Cost;
      }
    }
    setUnitCost(model.cost);
  }, [model]);
  const unitOptions: Unit[] = Object.values(data.factions[faction]);

  useEffect(() => {
    if (existingModel) {
      setModel(existingModel);
      if (existingModel.unit) {
        setSelectedUnit(existingModel.unit.name);
      }
    }
  }, [existingModel]);
  const isDoneLoading = () => {
    const value = existingModel === undefined || model.id !== null;
    return value;
  };
  return (
    <>
      <ContentContainer>
        <Grid
          container
          flexWrap="nowrap"
          direction="column"
          justifyContent="space-between"
          height="100%"
        >
          <Grid container direction="column">
            <Grid
              container
              justifyContent="space-between"
              gap="8px"
              sx={{ marginTop: 2 }}
            >
              <TextField
                id="value"
                value={model.name}
                label="NAME"
                variant="filled"
                color="secondary"
                defaultValue={model.name}
                onChange={handleNameChange}
              />

              <Grid
                container
                direction="column"
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                <Typography variant="h5" color="primary">
                  {selectedUnit === null ? "SELECT UNIT" : selectedUnit}
                </Typography>
                <Tooltip title="Current Unit Cost">
                  <Typography color="secondary" variant="subtitle1">
                    {unitCost} POINTS
                  </Typography>
                </Tooltip>
                <Tooltip title="Remaining Warband Points">
                  <Typography
                    sx={(theme) => ({
                      color:
                        calculatePointsRemaining < 0
                          ? theme.palette.error.main
                          : "text.disabled"
                    })}
                    variant="subtitle2"
                  >
                    {calculatePointsRemaining} Points Remaining
                  </Typography>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid>
              <SetUnitTabs
                showWeaponry={checkWeaponry()}
                showArmour={model?.unit?.armour && model.unit.armour.length > 0}
                showMount={model?.unit?.mounts && model.unit.mounts.length > 0}
                showUpgrades={
                  model?.unit?.upgrades && model.unit.upgrades.length > 0
                }
                value={tabValue}
                handleChange={handleTabChange}
              />
              {tabValue === "unitTab" && isDoneLoading() && (
                <SetUnitUnitHeader />
              )}
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
                          {existingModel !== undefined &&
                            model.id === null && (
                              <Grid
                                container
                                width="100%"
                                justifyContent="center"
                              >
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
                          {model.unit?.weaponry &&
                            model.unit.weaponry.length > 0 && (
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
                          {model.unit?.armour &&
                            model.unit.armour.length > 0 && (
                              <SetUnitArmour
                                armoury={model.unit?.armour}
                                currentArmoury={model.armour}
                                dropdownTitle="ARMOUR"
                                handleSelect={(armour) => {
                                  setModel({ ...model, armour });
                                }}
                              />
                            )}
                          {model.unit?.shield &&
                            model.unit.shield.length > 0 && (
                              <SetUnitArmour
                                armoury={model.unit?.shield}
                                currentArmoury={model.shield}
                                dropdownTitle="SHIELD"
                                handleSelect={(shield) => {
                                  setModel({ ...model, shield });
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
                                  setModel({ ...model, otherArmour });
                                }}
                              />
                            )}
                          {model.unit?.helmet &&
                            model.unit.helmet.length > 0 && (
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
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            marginTop="16px"
          >
            <Button variant="outlined" onClick={onClickBack}>
              CANCEL
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              gap="10px"
            >
              <Button variant="outlined">REMOVE UNIT</Button>

              <Button
                disabled={model.unit === null}
                variant="contained"
                onClick={handleSave}
              >
                SAVE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
      <Snackbar
        open={openAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          You have exceeded you Warband Total.
        </Alert>
      </Snackbar>
      <NoUnitNameError
        open={openNameAlert}
        onSave={(modelName) => {
          setModel({ ...model, name: modelName });
          setOpenNameAlert(false);
        }}
        onClose={() => setOpenNameAlert(false)}
      />
    </>
  );
};

export default SetUnitView;
