import { Grid } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';
// import Grid from '@mui/material/Unstable_Grid2';
import TopLogo from '../assets/images/top_logo.png';

interface Props {
  children: ReactElement[] | ReactComponent[];
  hideTopLogo?: boolean;
}

const ContentContainer: FunctionComponent<Props> = ({ children, hideTopLogo = false }) => (
  <Grid
    container
    justifyContent="flex-start"
    direction="column"
    sx={(theme) => ({
      padding: theme.spacing(5),
      width: theme.spacing(106),
      height: theme.spacing(103),
      background: 'linear-gradient(132.92deg, #000000 0.61%, rgba(0, 0, 0, 0.6) 100%)',
      boxShadow: '1px 30px 45px 10px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(20px)',
      borderRadius: '40px',
    })}
  >
    {!hideTopLogo && (
      <Grid
        item
        sx={{
          background: `url(${TopLogo})`,
          backgroundSize: '304px 72px',
          height: 72,
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    )}
    <Grid conatiner justifyContent="space-around">
      {children}
    </Grid>
  </Grid>
);

export default ContentContainer;
