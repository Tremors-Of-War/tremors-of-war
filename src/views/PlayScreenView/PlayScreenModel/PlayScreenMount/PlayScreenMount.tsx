import { Grid, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { Model } from "../../../../types";
import PlayScreenMountStats from "./PlayScreenMountStats";
import PlayScreenMountArmour from "./PlayScreenMountArmour";
import PlayScreenMountUpgrade from "./PlayScreenMountUpgrade";
import data from "../../../../data.json";
import PlayScreenMountWeapon from "./PlayScreenMountWeapon";

interface Props {
  model: Model;
}

const PlayScreenMount: FunctionComponent<Props> = ({ model }) => (
  <>
    {model.mounts && (
      <Grid container direction="column">
        <Typography color="primary">MOUNT</Typography>
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
            minHeight: theme.spacing(7),
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
            borderRadius: "4px",
          }}
        >
          <Grid container direction="column" maxWidth="160px">
            <Typography sx={{ color: "text.disabled" }} variant="caption">
              {data.mounts[model.mounts].type}
            </Typography>
            <Typography variant="body1">
              {model.mounts.replace(/_/g, " ")}
            </Typography>
          </Grid>

          <PlayScreenMountStats mounts={model.mounts} />
          <Grid
            container
            direction="column"
            justifyContent="flexs-start"
            width="116px"
            margin="8px 0px"
          >
            {data.mounts[model.mounts].abilities.map((ability) => (
              <Tooltip key={ability} title={data.abilities[ability].Effects}>
                <Typography variant="caption">&#8226; {ability}</Typography>
              </Tooltip>
            ))}
          </Grid>
        </Grid>
        {model.mountArmour && <PlayScreenMountArmour model={model} />}
        {model.mountWeapon && <PlayScreenMountWeapon model={model} />}
        {model.mountUpgrade && <PlayScreenMountUpgrade model={model} />}
      </Grid>
    )}
  </>
);
export default PlayScreenMount;
