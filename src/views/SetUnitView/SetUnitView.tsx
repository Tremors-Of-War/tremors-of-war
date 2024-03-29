import React, { FunctionComponent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Typography, TextField, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../components/ContentContainer";
import SetUnitTabs from "./tabs/SetUnitTabs";
import SetUnitUnitHeader from "./SetUnitUnit/SetUnitUnitHeader";
import { FactionId, getUnitsByFaction, Model } from "../../data";
import NoUnitNameError from "./components/NoUnitNameError";
import SetUnitTabCases from "./tabs/SetUnitTabCases";
import SetUnitFooter from "./components/SetUnitFooter";
import { calculateModelCost, calculateModelsCosts } from "../../utils/costs";
import { TabOption } from "./tabs/types";
import ExceededWarbandTotalAlert from "../../components/ExceededWarbandTotalAlert";

interface Props {
  faction: FactionId;
  existingModel?: Model;
  onClickBack: () => void;
  warbandTotal: number;
  models: Model[];
  onClickSave: (model: Model) => void;
  onDelete: (modelId: string) => void;
}

const blankModel: Model = {
  id: "",
  unit: null,
  cost: 0,
  name: "",
  armour: undefined,
  secondaryWeaponry: undefined,
  primaryWeaponry: undefined,
  rangedWeapon: undefined,
  helmet: undefined,
  upgrades: [],
  mounts: undefined,
  mountArmour: undefined,
  mountUpgrade: undefined,
  mountWeapon: undefined,
  active: true,
};

const SetUnitView: FunctionComponent<Props> = ({
  faction,
  onClickBack,
  warbandTotal,
  models,
  existingModel,
  onClickSave,
  onDelete,
}) => {
  const [tabValue, setTabValue] = React.useState<TabOption>("unitTab");

  const [model, setModel] = React.useState<Model>(blankModel);
  const [openNameAlert, setOpenNameAlert] = React.useState<boolean>(false);
  const modelCost = calculateModelCost(model);
  const modelCosts = calculateModelsCosts(models);
  const pointsRemaining = existingModel
    ? warbandTotal - modelCosts + existingModel.cost - modelCost
    : warbandTotal - modelCosts - modelCost;

  const handleNameChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setModel({ ...model, name: parsedInputValue });
  };
  const checkWeaponry = () => {
    if (
      (model?.unit?.secondaryWeaponry &&
        model.unit.secondaryWeaponry.length > 0) ||
      (model?.unit?.rangedWeaponry && model.unit.rangedWeaponry.length > 0) ||
      (model?.unit?.primaryWeaponry && model.unit.primaryWeaponry.length > 0)
    ) {
      return true;
    }
    return false;
  };

  const handleSave = () => {
    const value = uuidv4();
    model.cost = modelCost;
    if (!model.name) {
      setOpenNameAlert(true);
    } else if (model.id) {
      onClickSave(model);
    } else {
      onClickSave({ ...model, id: value });
    }
  };

  const exceededWarbandTotal = pointsRemaining < 0;

  const unitOptions = getUnitsByFaction(faction);

  useEffect(() => {
    if (existingModel) {
      setModel(existingModel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDoneLoading = () => {
    const value = existingModel === undefined || model.id !== null;
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
                    {modelCost.toLocaleString("en-US")} POINTS
                  </Typography>
                </Tooltip>
                <Tooltip title="Remaining Warband Points">
                  <Typography
                    sx={(theme) => ({
                      color:
                        pointsRemaining < 0
                          ? theme.palette.error.main
                          : "text.disabled",
                    })}
                    variant="subtitle2"
                  >
                    {pointsRemaining.toLocaleString("en-US")} Points Remaining
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
                handleChange={setTabValue}
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
              />
            </Grid>
          </Grid>

          <Grid container direction="column" justifyContent="flex-end">
            {tabValue !== "unitTab" && (
              <SetUnitFooter model={model} tabValue={tabValue} />
            )}

            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              marginTop="16px"
            >
              <Button
                variant="outlined"
                onClick={() => {
                  setModel(blankModel);
                  onClickBack();
                }}
              >
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
        </Grid>
      </ContentContainer>
      <ExceededWarbandTotalAlert open={exceededWarbandTotal} />
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
