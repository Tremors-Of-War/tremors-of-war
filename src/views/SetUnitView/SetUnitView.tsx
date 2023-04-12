import React, { FunctionComponent, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
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
import SetUnitUnitHeader from "./SetUnitUnitHeader";
import { Faction, Unit, Model } from "../../types";
import data from "../../data.json";
import NoUnitNameError from "../../components/NoUnitNameError";
import SetUnitTabCases from "./SetUnitTabCases";

interface Props {
  faction: Faction;
  existingModel?: Model;
  onClickBack: () => void;
  warbandTotal: number;
  onClickSave: (model: Model) => void;
  onDelete: (modelId: string) => void;
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
  onClickSave,
  onDelete
}) => {
  const [tabValue, setTabValue] = React.useState("unitTab");
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
    }
  }, []);

  const isDoneLoading = () => {
    const value =
      (existingModel === undefined || model.id !== null) && model.unit !== null;
    return value;
  };

  const onModelChanges = (newModel: Model) => {
    setModel(newModel);
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
                  {model?.unit?.name ? model.unit.name : "SELECT UNIT"}
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
                showArmour={model.unit?.armour && model.unit.armour.length > 0}
                showMount={model.unit?.mounts && model.unit.mounts.length > 0}
                showUpgrades={
                  model.unit?.upgrades && model.unit.upgrades.length > 0
                }
                value={tabValue}
                handleChange={handleTabChange}
              />
              {tabValue === "unitTab" && isDoneLoading() && (
                <SetUnitUnitHeader />
              )}
              <SetUnitTabCases
                tabValue={tabValue}
                model={model}
                existingModel={existingModel}
                isDoneLoading={isDoneLoading}
                onModelChanges={onModelChanges}
                blankModel={blankModel}
                unitOptions={unitOptions}
                setUnitCost={setUnitCost}
              />
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
              {existingModel && (
                <Button onClick={() => onDelete(model.id)} variant="outlined">
                  DELETE UNIT
                </Button>
              )}

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
