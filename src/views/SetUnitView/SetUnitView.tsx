import React, { FunctionComponent } from "react";
import { Button, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../components/ContentContainer";

interface Props {
  onClickBack: () => void;
}

const SetUnitView: FunctionComponent<Props> = ({ onClickBack }) => {
  const [unitName, setUnitName] = React.useState<string>();
  const handleChange = (event: any) => {
    const parsedInputValue = event.target.value;
    setUnitName(parsedInputValue);
  };

  return (
    <ContentContainer>
      <Grid
        container
        flexWrap="nowrap"
        direction="column"
        justifyContent="space-between"
        height="100%"
      >
        <Grid
          container
          justifyContent="space-between"
          gap="8px"
          sx={{ marginTop: 2 }}
        >
          <TextField
            id="value"
            value={unitName}
            label="NAME"
            variant="filled"
            color="secondary"
            defaultValue={unitName}
            onChange={handleChange}
          />

          <Grid
            container
            direction="column"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Typography variant="h5" color="primary">
              SELECT UNIT
            </Typography>

            <Typography color="secondary" variant="subtitle1">
              0 POINTS
            </Typography>
            <Typography sx={{ color: "text.disabled" }} variant="subtitle2">
              1500 POINTS REMAINING
            </Typography>
          </Grid>
        </Grid>

        <Grid container maxHeight="524px">
          <Typography>middle</Typography>
        </Grid>

        <Grid container alignItems="center" justifyContent="space-between">
          <Button variant="outlined" onClick={onClickBack}>
            BACK
          </Button>
          <Grid container direction="row" justifyContent="flex-end" gap="10px">
            <Button variant="outlined">REMOVE UNIT</Button>
            <Button variant="contained" onClick={() => alert(`${unitName}`)}>
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ContentContainer>
  );
};

export default SetUnitView;
