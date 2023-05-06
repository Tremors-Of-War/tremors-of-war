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
import { Weapons } from "../../../types";
import SetUnitWeaponryStats from "../SetUnitWeaponry/SetUnitWeaponryStats";
import data from "../../../data.json";

interface Props {
  weaponry: string[];
  currentWeaponry?: Weapons;
  handleSelect: (selected: Weapons) => void;
}

const SetUnitMountWeaponry: FunctionComponent<Props> = ({
  weaponry,
  currentWeaponry,
  handleSelect,
}) => {
  const [weaponSelect, setWeaponSelect] = React.useState(currentWeaponry);

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
          WEAPON
        </Typography>
        <Grid width="275px" paddingBottom="8px">
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel variant="filled">SELECT ARMOUR</InputLabel>
            <Select
              value={weaponSelect || ""}
              onChange={(event: SelectChangeEvent) => {
                const value = event.target.value as Weapons;
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
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px",
        }}
      >
        {weaponSelect && (
          <>
            <Grid width="416px">
              <SetUnitWeaponryStats weapon={weaponSelect} />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              width="100px"
            >
              <Grid container direction="row" justifyContent="flex-start">
                {data.weapons[weaponSelect].Traits.map((trait, i, arr) => (
                  <Tooltip key={i} title={data.abilities[trait].Effects}>
                    <Typography variant="body1">
                      {trait}
                      {i !== arr.length - 1 ? "," : ""}&nbsp;
                    </Typography>
                  </Tooltip>
                ))}
              </Grid>

              <Grid container justifyContent="flex-start" width="100px">
                <Grid
                  component={Typography}
                  variant="body2"
                  color="text.disabled"
                >
                  {data.weapons[weaponSelect].Cost} Points&nbsp;
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};
export default SetUnitMountWeaponry;
