import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Armour } from "../../types";
import data from "../../data.json";

interface Props {
  armour: Armour;
}

const PlayScreenArmourStats: FunctionComponent<Props> = ({ armour }) => {
  const armourStats = data.armour[armour];
  return (
    <Grid
      container
      marginBottom="8px"
      padding="0px 16px"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
      direction="row"
      sx={{
        gap: "auto",
        minHeight: "56px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212",
        borderRadius: "4px"
      }}
    >
      <Grid
        container
        justifyContent="flex-start"
        width="150px"
        paddingRight="32px"
      >
        <Typography variant="body1">{armourStats.Name}</Typography>
      </Grid>
      <Grid height="100%" width="456px" sx={{ whiteSpace: "pre-wrap" }}>
        <Grid component={Typography} variant="caption">
          {" "}
          {armourStats.Effects}
        </Grid>
      </Grid>

      <Grid
        container
        width="80px"
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
        gap="8px"
      >
        <Grid
          container
          direction="column"
          width="32px"
          alignItems="center"
          justifyContent="center"
        >
          <Grid component={Tooltip} title="Ranged">
            <Grid component={Typography} variant="body2" color="text.disabled">
              R
            </Grid>
          </Grid>
          <Grid component={Typography} variant="body2">
            {armourStats["Armour Value R"]}
          </Grid>
        </Grid>

        <Grid
          width="32px"
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid component={Tooltip} title="Close Combat">
            <Grid component={Typography} variant="body2" color="text.disabled">
              CC
            </Grid>
          </Grid>
          <Grid component={Typography} variant="body2">
            {armourStats["Armour Value CC"]}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PlayScreenArmourStats;
