import React, { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import StartLogo from "../../assets/images/start_logo.png";
import ContentContainer from "../../components/ContentContainer";
import DevelopmentAlert from "./DevelopmentAlert";

interface Props {
  onClickNewList: () => void;
}

const StartScreenView: FunctionComponent<Props> = ({ onClickNewList }) => (
  <>
    <ContentContainer hideTopLogo>
      <Grid
        container
        justifyContent="center"
        className="startscreen"
        alignItems="center"
        sx={{
          height: "100%",
          width: "100%",
          background: `url(${StartLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "684px 164px"
        }}
      />
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        gap="10px"
        position="absolute"
        bottom="40px"
        right="40px"
      >
        <Button
          variant="outlined"
          onClick={() => alert("Import/Export functionality in development!")}
        >
          IMPORT LIST
        </Button>
        <Button variant="contained" onClick={onClickNewList}>
          NEW LIST
        </Button>
      </Grid>
    </ContentContainer>
    <DevelopmentAlert />
  </>
);

export default StartScreenView;
