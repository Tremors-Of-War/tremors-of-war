import { Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { Model } from "../../../../types";
import data from "../../../../data.json";

interface Props {
  model: Model;
}

const PlayScreenMountUpgrade: FunctionComponent<Props> = ({ model }) => (
  <>
    {model.mountUpgrade && (
      <Grid
        container
        alignItems="center"
        marginBottom="8px"
        justifyContent="space-between"
        flexWrap="nowrap"
        padding="8px 16px"
        direction="row"
        gap="24px"
        sx={{
          width: "100%",
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px"
        }}
      >
        <Grid container direction="column" width="150px">
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            Upgrade
          </Typography>
          <Typography>{model.mountUpgrade}</Typography>
        </Grid>
        <Grid container justifyContent="flex-start">
          <Grid
            component={Typography}
            variant="caption"
            sx={{ whiteSpace: "pre-wrap" }}
          >
            &nbsp;{data.abilities[model.mountUpgrade].Effects}
          </Grid>
        </Grid>
      </Grid>
    )}
  </>
);
export default PlayScreenMountUpgrade;
