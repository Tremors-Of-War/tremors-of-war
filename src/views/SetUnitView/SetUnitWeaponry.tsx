import {
  FormControl,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import React, { FunctionComponent } from "react";
import theme from "../../app/theme";
import { Weapons } from "../../types";
import data from "../../data.json";
import SetUnitWeaponryStats from "./SetUnitWeaponryStats";

interface Props {
  dropdownTitle: string;
  weaponry: Weapons[];
  currentWeaponry?: Weapons;
  handleSelect: (selected: Weapons) => void;
}

const SetUnitWeaponry: FunctionComponent<Props> = ({
  dropdownTitle,
  weaponry,
  currentWeaponry,
  handleSelect
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
                    const value = event.target.value as Weapons;
                    setWeaponSelect(value);
                    handleSelect(value);
                  }}
                >
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
              borderRadius: "4px"
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
                  <SetUnitWeaponryStats weapon={weaponSelect} />
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    width="208px"
                  >
                    <Grid container direction="row" justifyContent="flex-end">
                      {data.weapons[weaponSelect].Traits.map(
                        (trait, i, arr) => (
                          <Typography variant="body1" key={i}>
                            {trait}
                            {i !== arr.length - 1 ? "," : ""}&nbsp;
                          </Typography>
                        )
                      )}
                    </Grid>

                    <Grid container justifyContent="flex-end" width="100px">
                      <Grid component={Typography} color="text.disabled">
                        {data.weapons[weaponSelect].Cost} Points&nbsp;
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
