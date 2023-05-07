import {
  FormControl,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Tooltip,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../app/theme";
import { ArmourId } from "../../../types";
import data from "../../../data.json";

interface Props {
  armoury: string[];
  currentMountArmour?: ArmourId;
  handleSelect: (selected: ArmourId) => void;
}

const SetUnitMountArmour: FunctionComponent<Props> = ({
  armoury,
  currentMountArmour,
  handleSelect,
}) => {
  const [armourSelect, setArmourSelect] = React.useState(currentMountArmour);

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
          ARMOUR
        </Typography>
        <Grid width="275px" paddingBottom="8px">
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel variant="filled">SELECT ARMOUR</InputLabel>
            <Select
              value={armourSelect || ""}
              onChange={(event: SelectChangeEvent) => {
                const value = event.target.value as ArmourId;
                setArmourSelect(value);
                handleSelect(value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {armoury.map((item) => (
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
        alignItems="center"
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
          borderRadius: "4px",
        }}
      >
        {armourSelect && (
          <>
            <Grid height="100%" width="425px" sx={{ whiteSpace: "pre-wrap" }}>
              <Grid component={Typography} variant="caption">
                {" "}
                {data.armour[armourSelect].Effects}
              </Grid>
            </Grid>

            <Grid
              container
              width="60px"
              justifyContent="flex-end"
              alignItems="center"
              direction="row"
            >
              <Grid
                width="30px"
                alignItems="flex-start"
                justifyContent="center"
              >
                <Grid component={Tooltip} title="Ranged">
                  <Typography variant="body2" color="text.disabled">
                    R
                  </Typography>
                </Grid>
                <Grid component={Typography} variant="body2">
                  {data.armour[armourSelect]["Armour Value R"]}
                </Grid>
              </Grid>

              <Grid
                width="30px"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid component={Tooltip} title="Close Combat">
                  <Typography variant="body2" color="text.disabled">
                    CC
                  </Typography>
                </Grid>
                <Grid component={Typography} variant="body2">
                  {data.armour[armourSelect]["Armour Value CC"]}
                </Grid>
              </Grid>
            </Grid>

            <Grid width="100px">
              <Grid component={Typography} variant="body2">
                {data.armour[armourSelect].Cost} Points
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};
export default SetUnitMountArmour;
