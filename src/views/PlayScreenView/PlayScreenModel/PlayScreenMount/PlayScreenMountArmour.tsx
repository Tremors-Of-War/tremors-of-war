import { Grid, Typography, Tooltip } from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../../app/theme";
import { Model } from "../../../../types";
import data from "../../../../data.json";

interface Props {
  model: Model;
}

const PlayScreenMountArmour: FunctionComponent<Props> = ({ model }) => (
  <>
    {model.mountArmour && (
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        marginBottom="8px"
        padding="8px 16px"
        direction="row"
        gap="24px"
        sx={{
          width: "100%",
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px",
        }}
      >
        <Grid container direction="column" width="100px">
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            Armour
          </Typography>
          <Typography>{model.mountArmour}</Typography>
        </Grid>
        <Grid height="100%" width="425px" sx={{ whiteSpace: "pre-wrap" }}>
          <Grid component={Typography} variant="caption">
            {" "}
            {data.armour[model.mountArmour].Effects}
          </Grid>
        </Grid>

        <Grid
          container
          width="60px"
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid width="30px" alignItems="flex-start" justifyContent="center">
            <Grid component={Tooltip} title="Ranged">
              <Typography variant="body2" color="text.disabled">
                R
              </Typography>
            </Grid>

            <Grid component={Typography} variant="body2">
              {data.armour[model.mountArmour]["Armour Value R"]}
            </Grid>
          </Grid>

          <Grid width="30px" justifyContent="center" alignItems="flex-start">
            <Grid component={Tooltip} title="Close Combat">
              <Typography variant="body2" color="text.disabled">
                CC
              </Typography>
            </Grid>
            <Grid component={Typography} variant="body2">
              {data.armour[model.mountArmour]["Armour Value CC"]}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )}
  </>
);
export default PlayScreenMountArmour;
