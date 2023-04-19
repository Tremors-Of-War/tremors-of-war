import { Radio, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../app/theme";
import data from "../../../data.json";
import { Mounts } from "../../../types";
import SetUnitMountsStats from "./SetUnitMountsStats";

interface Props {
  handleSelect: (selected: Mounts) => void;
  mounts: Mounts;
  currentMounts?: Mounts;
}

const SetUnitMounts: FunctionComponent<Props> = ({
  handleSelect,
  mounts,
  currentMounts,
}) => {
  const handleClick = (event: any) => {
    const value = event.target.value as Mounts;
    handleSelect(value);
  };

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
      <Grid container direction="row">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            wrap="wrap"
            width="176px"
          >
            <Typography>{mounts}</Typography>
            <Typography variant="body1" sx={{ color: "text.disabled" }}>
              {data.mounts[mounts].Cost} Points
            </Typography>
          </Grid>
          <SetUnitMountsStats mounts={mounts} />
        </Grid>
      </Grid>

      <Radio
        checked={currentMounts === mounts}
        value={mounts}
        onClick={handleClick}
      />
    </Grid>
  );
};
export default SetUnitMounts;
