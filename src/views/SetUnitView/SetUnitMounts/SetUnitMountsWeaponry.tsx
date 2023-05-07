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
import { WeaponId } from "../../../types";
import WeaponryStats from "../../../components/Weaponry/WeaponryStats";
import data from "../../../data.json";
import WeaponryTraits from "../../../components/Weaponry/WeaponryTraits";

interface Props {
  weaponry: string[];
  currentWeaponry?: WeaponId;
  handleSelect: (selected: WeaponId) => void;
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
          minHeight: theme.spacing(7),
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
          borderRadius: "4px",
        }}
      >
        {weaponSelect && (
          <>
            <Grid width="416px">
              <WeaponryStats weapon={weaponSelect} />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              width="100px"
            >
              <WeaponryTraits weapon={weaponSelect} textSize="body1" />

              <Grid container justifyContent="flex-end" width="100px">
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
