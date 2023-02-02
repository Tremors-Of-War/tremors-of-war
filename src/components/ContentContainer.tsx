import React, { FunctionComponent, ReactElement } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
  children: ReactElement[] | ReactElement;
}

const ContentContainer: FunctionComponent<Props> = ({ children }) => (
  <Grid
    sx={(theme) => ({
      padding: theme.spacing(4),
      width: theme.spacing(106),
      height: theme.spacing(103),
      background: 'linear-gradient(132.92deg, #000000 0.61%, rgba(0, 0, 0, 0.6) 100%)',
      boxShadow: '1px 30px 45px 10px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(20px)',
      borderRadius: '40px',
    })}
  >
    {children}
  </Grid>
);

export default ContentContainer;
