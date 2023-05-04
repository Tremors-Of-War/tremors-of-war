import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  IconButton,
  Box
} from "@mui/material";
import React, { FunctionComponent } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "../../../app/theme";
import { Model } from "../../../types";
import PlayScreenModelDetails from "./PlayScreenModelDetails";
import skullLogo from "../../../assets/images/skull_logo.png";
import KillAlertDialog from "../components/KillAlertDialog";
import ReviveAlertDialog from "../components/ReviveAlertDialog";

interface Props {
  model: Model;
  onActiveChange: (model: Model) => void;
}
const defaultBackground =
  "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212";
const inactiveBackground = "rgba(255, 255, 255, 0.09)";

const PlayScreenModel: FunctionComponent<Props> = ({
  model,
  onActiveChange
}) => {
  const [openKillAlert, setOpenKillAlert] = React.useState<boolean>(false);
  const [openReviveAlert, setOpenReviveAlert] = React.useState<boolean>(false);
  const stopPropagation = (e: any) => e.stopPropagation();

  return (
    <AccordionDetails sx={{ padding: "8px 0px" }}>
      <Grid
        component={Accordion}
        container
        // marginTop="8px"
        // marginBottom="8px"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        direction="column"
        sx={{
          gap: "auto",
          minHeight: theme.spacing(9),
          background: model.active ? defaultBackground : inactiveBackground,
          borderRadius: "4px",
          ".MuiCollapse-root": { width: "100%" }
        }}
      >
        <Grid
          component={AccordionSummary}
          expandIcon={<ExpandMoreIcon />}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            marginRight="8px"
          >
            <Grid container direction="column" width="250px">
              {model.name && (
                <Typography
                  color={model.active ? "primary" : "text.disabled"}
                  variant="body1"
                >
                  {model.name}
                </Typography>
              )}

              {model?.unit?.name && (
                <Typography color="text.disabled" variant="body1">
                  {model.unit.name}
                </Typography>
              )}
            </Grid>
            <Box onClick={stopPropagation}>
              <IconButton
                sx={{ display: model.active ? "" : "none" }}
                onClick={() => setOpenKillAlert(true)}
              >
                <img src={skullLogo} alt="skull_logo" />
              </IconButton>
              <IconButton
                sx={{ display: model.active ? "none" : "" }}
                onClick={() => setOpenReviveAlert(true)}
              >
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid component={AccordionDetails} marginBottom="16px">
          <PlayScreenModelDetails model={model} />
        </Grid>
      </Grid>
      <KillAlertDialog
        open={openKillAlert}
        model={model}
        onActiveChange={onActiveChange}
        onClose={() => setOpenKillAlert(false)}
      />
      <ReviveAlertDialog
        open={openReviveAlert}
        model={model}
        onActiveChange={onActiveChange}
        onClose={() => setOpenReviveAlert(false)}
      />
    </AccordionDetails>
  );
};
export default PlayScreenModel;
