import { Checkbox, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../app/theme";
import data from "../../../data/database.json";
import { AbilityId } from "../../../data";

interface Props {
  handleClick: (selected: boolean) => void;
  upgrade: AbilityId;
  currentUpgrades: AbilityId[];
}

const SetUnitUpgrades: FunctionComponent<Props> = ({
  handleClick,
  upgrade,
  currentUpgrades,
}) => {
  const checkboxSelected = currentUpgrades.includes(upgrade);
  const handleCheckboxClick = () => handleClick(!checkboxSelected);

  return (
    <Grid
      container
      marginBottom="16px"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      padding="8px 16px"
      direction="row"
      sx={{
        width: "100%",
        gap: "auto",
        minHeight: theme.spacing(9),
        borderRadius: "4px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        wrap="wrap"
        width="136px"
      >
        <Typography>{upgrade}</Typography>
        <Typography variant="body1" sx={{ color: "text.disabled" }}>
          {data.abilities[upgrade].Cost} Points
        </Typography>
      </Grid>

      <Grid container justifyContent="flex-start" width="488px">
        <Grid component={Typography} variant="caption">
          {" "}
          {data.abilities[upgrade].Effects}
        </Grid>
      </Grid>

      <Checkbox checked={checkboxSelected} onClick={handleCheckboxClick} />
    </Grid>
  );
};
export default SetUnitUpgrades;
