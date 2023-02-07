import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { FunctionComponent } from 'react';

interface Props {
  image: string;
  ruleSetName: string;
}

const ChooseRuleSetButton: FunctionComponent<Props> = ({ image, ruleSetName }) => (
  <Grid
    container
    sx={{
      width: '100%',
      height: '100%',
      '& :hover': {
        opacity: 1,
        transition: 'all 0.3s ease-in-out',
      },
    }}
  >
    <Grid
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        background: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="overlay"
        sx={{
          width: '100%',
          height: '100%',
          opacity: 0,
          borderRadius: '20px',
          background: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))',
        }}
      >
        <Grid>
          <Typography variant="h4">{ruleSetName}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ChooseRuleSetButton;