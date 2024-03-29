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
import { armourById, ArmourId } from "../../../data";

interface Props {
  dropdownTitle: string;
  armoury: ArmourId[];
  currentArmoury?: ArmourId;
  handleSelect: (selected: ArmourId) => void;
}

const SetUnitArmour: FunctionComponent<Props> = ({
  dropdownTitle,
  armoury,
  currentArmoury,
  handleSelect,
}) => {
  const [armourSelect, setArmourSelect] = React.useState(currentArmoury);

  return (
    <>
      {armoury && (
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          flexWrap="nowrap"
          padding="8px 16px"
          direction="column"
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="primary">
              {dropdownTitle}
            </Typography>
            <Grid width="275px" paddingBottom="8px">
              <FormControl fullWidth variant="filled" size="small">
                <InputLabel variant="filled">SELECT {dropdownTitle}</InputLabel>
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
              minHeight: theme.spacing(9),
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212",
              borderRadius: "4px",
            }}
          >
            {armourSelect && (
              <>
                <Grid
                  height="100%"
                  width="425px"
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  <Grid component={Typography} variant="caption">
                    {" "}
                    {armourById[armourSelect].Effects}
                  </Grid>
                </Grid>

                <Grid
                  container
                  width="100px"
                  justifyContent="flex-end"
                  alignItems="center"
                  direction="row"
                >
                  <Grid
                    width="50px"
                    alignItems="flex-start"
                    justifyContent="center"
                  >
                    <Grid component={Tooltip} title="Ranged">
                      <Typography color="text.disabled">R</Typography>
                    </Grid>
                    <Grid component={Typography}>
                      {armourById[armourSelect]["Armour Value R"]}
                    </Grid>
                  </Grid>

                  <Grid
                    width="50px"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid component={Tooltip} title="Close Combat">
                      <Typography color="text.disabled">CC</Typography>
                    </Grid>
                    <Grid component={Typography}>
                      {armourById[armourSelect]["Armour Value CC"]}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid width="100px">
                  <Grid component={Typography}>
                    {armourById[armourSelect].Cost} Points
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      )}

      {!armoury && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid component={Typography} variant="body1">
            No Unit Selected
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default SetUnitArmour;
