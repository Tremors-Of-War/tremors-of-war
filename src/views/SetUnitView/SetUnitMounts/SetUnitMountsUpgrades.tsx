import {
  FormControl,
  Grid,
  Typography,
  InputLabel,
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../app/theme";
import data from "../../../data.json";
import { AbilityId } from "../../../types";

interface Props {
  upgrades: string[];
  currentMountUpgrade?: AbilityId;
  handleSelect: (selected: AbilityId) => void;
}

const SetUnitMountUpgrades: FunctionComponent<Props> = ({
  upgrades,
  currentMountUpgrade,
  handleSelect,
}) => {
  const [upgradeSelect, setUpgradeSelect] = React.useState(currentMountUpgrade);

  return (
    <Grid
      container
      alignItems="center"
      marginTop="16px"
      justifyContent="space-between"
      flexWrap="nowrap"
      padding="8px 16px"
      direction="column"
    >
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Typography variant="body1" color="primary" marginBottom="8px">
          UPGRADE
        </Typography>
        <Grid width="275px" paddingBottom="8px">
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel variant="filled">SELECT UPGRADE</InputLabel>
            <Select
              value={upgradeSelect || ""}
              onChange={(event: SelectChangeEvent) => {
                const value = event.target.value as AbilityId;
                setUpgradeSelect(value);
                handleSelect(value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {upgrades.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        marginBottom="8px"
        padding="8px 16px"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        direction="row"
        sx={{
          gap: "auto",
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px",
        }}
      >
        {currentMountUpgrade && (
          <>
            <Grid container justifyContent="flex-start" width="532px">
              <Grid
                component={Typography}
                variant="caption"
                sx={{ whiteSpace: "pre-wrap" }}
              >
                &nbsp;{data.abilities[currentMountUpgrade].Effects}
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              wrap="wrap"
              width="100px"
            >
              <Typography variant="body2">
                {data.abilities[currentMountUpgrade].Cost} Points
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};
export default SetUnitMountUpgrades;
