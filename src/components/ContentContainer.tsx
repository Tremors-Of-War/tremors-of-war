import Grid from "@mui/material/Unstable_Grid2";
import React, { FunctionComponent, ReactElement } from "react";
import TopLogo from "../assets/images/top_logo.png";

interface Props {
  children: ReactElement[] | ReactElement;
  hideTopLogo?: boolean;
}

const ContentContainer: FunctionComponent<Props> = ({
  children,
  hideTopLogo = false,
}) => (
  <Grid
    container
    justifyContent="flex-start"
    flexWrap="nowrap"
    direction="column"
    sx={(theme) => ({
      padding: theme.spacing(5),
      width: theme.spacing(106),
      height: theme.spacing(103),
      background:
        "linear-gradient(132.92deg, #000000 0.61%, rgba(0, 0, 0, 0.6) 100%)",
      boxShadow: "1px 30px 45px 10px rgba(0, 0, 0, 0.25)",
      backdropFilter: "blur(20px)",
      borderRadius: "40px",
    })}
  >
    {!hideTopLogo && (
      <Grid container width="100%" justifyContent="center">
        <Grid>
          <img
            src={TopLogo}
            height={72}
            width={304}
            alt="Tremors of War Title"
          />
        </Grid>
      </Grid>
    )}
    <Grid
      container
      height="100%"
      direction="column"
      justifyContent="space-between"
      className="content-box"
    >
      {children}
    </Grid>
  </Grid>
);

export default ContentContainer;
