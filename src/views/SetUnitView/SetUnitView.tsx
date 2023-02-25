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
import { Faction, Unit } from "../../types";
import data from "../../data.json";

interface Props {
  faction: Faction;
  onClickBack: () => void;
  warbandTotal: number;
}

const SetUnitView: FunctionComponent<Props> = ({
  faction,
  onClickBack,
  warbandTotal
}) => {
  const [unitName, setUnitName] = React.useState<string>();
  const [tabValue, setTabValue] = React.useState(0);
  const [selectedUnit, setSelectedUnit] = React.useState<string | null>(null);
  const [unitCost, setUnitCost] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  const handleTabChange = (event: any, newValue: number) => {
    setTabValue(newValue);
  };

  const handleNameChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setUnitName(parsedInputValue);
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
                value={unitName}
                label="NAME"
                variant="filled"
                color="secondary"
                defaultValue={unitName}
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
              <SetUnitTabs value={tabValue} handleChange={handleTabChange} />
              {tabValue === 0 && <SetUnitUnitHeader />}
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
                    case 0:
                      return (
                        <>
                          {unitOptions.map((unit) => (
                            <SetUnitUnit
                              unit={unit}
                              handleClick={() => {
                                setSelectedUnit(unit.name);
                                setUnitCost(unit.points);
                              }}
                              isSelected={selectedUnit === unit.name}
                            />
                          ))}
                        </>
                      );
                    case 1:
                      return <Typography>two</Typography>;
                    case 2:
                      return <Typography>three</Typography>;
                    case 3:
                      return <Typography>four</Typography>;

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
              <Button variant="contained" onClick={() => alert(`${unitName}`)}>
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
