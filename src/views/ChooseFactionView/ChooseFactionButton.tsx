import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { FunctionComponent } from 'react';

interface Props {
  factionName: string;
  image: any;
}

const ChooseFactionButton: FunctionComponent<Props> = ({ image, factionName }) => (
  <Grid
    container
    sx={{
      width: '100%',
      height: '100%',
    }}
  >
    <Button
      variant="outlined"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        padding: '0px',
        ' :hover': {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          shrink: 'true',
          transition: 'all .3s ease-in-out',
        },
        '& :hover': {
          opacity: 0,
        },
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%', width: '100%', opacity: 1 }}
      >
        {factionName}
      </Grid>
    </Button>
  </Grid>
);

export default ChooseFactionButton;
