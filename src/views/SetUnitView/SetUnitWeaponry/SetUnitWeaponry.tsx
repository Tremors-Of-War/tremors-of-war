import {
  FormControl,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../../app/theme";
import { WeaponId, weaponsById } from "../../../data";
import WeaponryStats from "../../../components/Weaponry/WeaponryStats";
import WeaponryTraits from "../../../components/Weaponry/WeaponryTraits";

interface Props {
  dropdownTitle: string;
  weaponry: WeaponId[];
  currentWeaponry?: WeaponId;
  handleSelect: (selected: WeaponId) => void;
}

const SetUnitWeaponry: FunctionComponent<Props> = ({
  dropdownTitle,
  weaponry,
  currentWeaponry,
  handleSelect,
}) => {
  const [weaponSelect, setWeaponSelect] = React.useState(currentWeaponry);
  return (
    <>
      {weaponry && (
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

            <Grid width="300px" paddingBottom="8px">
              <FormControl fullWidth variant="filled" size="small">
                <InputLabel variant="filled">SELECT {dropdownTitle}</InputLabel>
                <Select
                  value={weaponSelect || ""}
                  onChange={(event: SelectChangeEvent) => {
                    const value = event.target.value as WeaponId;
                    setWeaponSelect(value);
                    handleSelect(value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {weaponry.map((item) => (
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
            {weaponSelect && (
              <Grid container direction="row">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid container justifyContent="flex-start" width="465px">
                    <WeaponryStats weaponId={weaponSelect} />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    width="208px"
                  >
                    <WeaponryTraits weapon={weaponSelect} textSize="body1" />

                    <Grid container justifyContent="flex-end" width="100px">
                      <Grid component={Typography} color="text.disabled">
                        {weaponsById[weaponSelect].Cost} Points&nbsp;
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}

      {!weaponry && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid component={Typography} variant="body1">
            No Unit Selected
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default SetUnitWeaponry;
