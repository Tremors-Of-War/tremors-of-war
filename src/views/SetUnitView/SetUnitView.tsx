import React, { FunctionComponent, useMemo } from "react";
import {
  Button,
  Typography,
  TextField,
  Tooltip,
  Snackbar,
  Alert
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../components/ContentContainer";
import SetUnitTabs from "./SetUnitTabs";
import SetUnitUnit from "./SetUnitUnit";
import SetUnitUnitHeader from "./SetUnitUnitHeader";
import { Faction, Unit, Model, Armour } from "../../types";
import data from "../../data.json";
import SetUnitArmour from "./SetUnitArmour";
import SetUnitUpgrades from "./SetUnitUpgrades";

interface Props {
  faction: Faction;
  onClickBack: () => void;
  warbandTotal: number;
  onClickSave: (model: Model) => void;
}
// TODO MODEL ID LOGIC
const modelId = 0;

const blankModel: Model = {
  id: 0,
  unit: null,
  cost: 0,
  name: "",
  armour: [],
  shield: [],
  otherArmour: [],
  helmet: [],
  upgrades: [],
  mounts: []
};

const SetUnitView: FunctionComponent<Props> = ({
  faction,
  onClickBack,
  warbandTotal,
  onClickSave
}) => {
  const [tabValue, setTabValue] = React.useState("unitTab");
  const [selectedUnit, setSelectedUnit] = React.useState<string | null>(null);
  const [unitCost, setUnitCost] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const [model, setModel] = React.useState<Model>(blankModel);
  const [mount, setMount] = React.useState<boolean>(false);
  const [upgrades, setUpgrades] = React.useState<boolean>(false);

  const handleTabChange = (event: any, newValue: string) => {
    setTabValue(newValue);
  };

  const handleNameChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setModel({ ...model, name: parsedInputValue });
  };
  const getCurrentArmoury = (armoury: Armour[]) => {
    const selectedArmour = armoury.length > 0 ? Object.values(armoury)[0] : "";
    return selectedArmour;
  };
  useMemo(() => {
    if (model.unit?.mounts.length > 0) {
      setMount(true);
    } else {
      setMount(false);
    }
  }, [model.unit]);

  useMemo(() => {
    model.armour = [];
    model.upgrades = [];
    model.shield = [];
    model.helmet = [];
    model.otherArmour = [];
  }, [model.unit]);

  useMemo(() => {
    if (model.unit?.upgrades.length > 0) {
      setUpgrades(true);
    } else {
      setUpgrades(false);
    }
  }, [model.unit]);

  const handleSave = () => {
    setModel({ ...model, id: modelId });
    onClickSave(model);
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
  const unitOptions: Unit[] = Object.values(data.factions[faction]);
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
                showMount={mount}
                showUpgrades={upgrades}
                value={tabValue}
                handleChange={handleTabChange}
              />
              {tabValue === "unitTab" && <SetUnitUnitHeader />}
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
                          {unitOptions.map((unit) => (
                            <SetUnitUnit
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
                      );
                    case "weaponTab":
                      return (
                        <>
                          {model.unit && <Typography>you did it</Typography>}
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
                          {model.unit?.armour.length > 0 && (
                            <SetUnitArmour
                              armoury={model.unit?.armour}
                              currentArmoury={getCurrentArmoury(model.armour)}
                              dropdownTitle="ARMOUR"
                              handleSelect={(selected) => {
                                model.armour = model.armour.filter(
                                  (remove) => remove === selected
                                );
                                model.armour.push(selected);
                                setModel(model);
\                              }}
                            />
                          )}
                          {model.unit?.shield.length > 0 && (
                            <SetUnitArmour
                              armoury={model.unit?.shield}
                              currentArmoury={getCurrentArmoury(model.shield)}
                              dropdownTitle="SHIELD"
                              handleSelect={(selected) => {
                                model.shield = model.shield.filter(
                                  (remove) => remove === selected
                                );
                                model.shield.push(selected);
                                setModel(model);
                              }}
                            />
                          )}

                          {model.unit?.otherArmour?.length > 0 && (
                            <SetUnitArmour
                              armoury={model.unit?.otherArmour}
                              currentArmoury={getCurrentArmoury(
                                model.otherArmour
                              )}
                              dropdownTitle="OTHER ARMOUR"
                              handleSelect={(selected) => {
                                model.shield = model.otherArmour.filter(
                                  (remove) => remove === selected
                                );
                                model.otherArmour.push(selected);
                                setModel(model);
                              }}
                            />
                          )}
                          {model.unit?.helmet?.length > 0 && (
                            <SetUnitArmour
                              armoury={model.unit?.helmet}
                              currentArmoury={getCurrentArmoury(model.helmet)}
                              dropdownTitle="HELMET"
                              handleSelect={(selected) => {
                                model.shield = model.helmet.filter(
                                  (remove) => remove === selected
                                );
                                model.helmet.push(selected);
                                setModel(model);
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
                      return <Typography>mount</Typography>;
                    case "upgradesTab":
                      return (
                        // eslint-disable-next-line
                        <>
                          {model.unit?.upgrades.map((upgrade) => (
                            <SetUnitUpgrades
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
              BACK
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              gap="10px"
            >
              <Button variant="outlined">REMOVE UNIT</Button>
              <Button variant="contained" onClick={handleSave}>
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
    </>
  );
};

export default SetUnitView;
