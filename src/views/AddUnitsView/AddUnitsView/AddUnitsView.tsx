import React, { FunctionComponent } from "react";
import { List, Collapse } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TransitionGroup } from "react-transition-group";
import ContentContainer from "../../../components/ContentContainer";
import ChooseWarBandTotalDialog from "../../../components/ChooseWarBandTotalDialog";
import { Faction, Model } from "../../../types";
import AddUnitUnit from "./AddUnitUnit";
import RestartConfirmationDialog from "../components/RestartConfirmationDialog";
import AddUnitsViewHeader from "../components/AddUnitsViewHeader";
import AddUnitsViewFooter from "../components/AddUnitsViewFooter";
import ExceededWarbandTotalAlert from "../../../components/ExceededWarbandTotalAlert";
import { calculateModelsCosts } from "../../../utils/costs";

interface Props {
  faction: Faction;
  warbandTotal: number;
  onClickRestart: () => void;
  onClickPlay: () => void;
  onClickAdd: () => void;
  onDelete: (modelId: string) => void;
  models: Record<string, Model>;
  onEdit: (modelId: string) => void;
  setWarbandTotal: (warbandTotal: number) => void;
}

const AddUnitsView: FunctionComponent<Props> = ({
  faction,
  warbandTotal,
  setWarbandTotal,
  onClickRestart,
  onClickAdd,
  onDelete,
  onClickPlay,
  onEdit,
  models,
}) => {
  const [openWarbandDialog, setOpenWarbandDialog] = React.useState(true);
  const [openRestartAlert, setOpenRestartAlert] =
    React.useState<boolean>(false);

  const handleClose = (value: number) => {
    setOpenWarbandDialog(!openWarbandDialog);
    setWarbandTotal(value);
  };
  const modelCosts = calculateModelsCosts(Object.values(models));
  const exceededWarbandTotal = warbandTotal - modelCosts < 0;

  return (
    <>
      <ContentContainer>
        <Grid
          container
          flexWrap="nowrap"
          direction="column"
          justifyContent="space-between"
          height="100%"
        >
          <AddUnitsViewHeader
            faction={faction}
            onClickAdd={onClickAdd}
            warbandTotal={warbandTotal}
            models={Object.values(models)}
          />

          <Grid
            container
            marginTop="16px"
            flexGrow={1}
            justifyContent="flex-start"
            maxWidth="6200px"
            maxHeight="496px"
            sx={{
              overflowX: "hidden",
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <List sx={{ width: "100%" }}>
              <TransitionGroup>
                {Object.entries(models).map(([id, model]) => (
                  <Collapse key={id}>
                    <AddUnitUnit
                      model={model}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </Collapse>
                ))}
              </TransitionGroup>
            </List>
          </Grid>
          <AddUnitsViewFooter
            onClickRestart={() => setOpenRestartAlert(true)}
            onClickEditWarbandTotal={() =>
              setOpenWarbandDialog(!openWarbandDialog)
            }
            onClickPlay={onClickPlay}
          />
        </Grid>
      </ContentContainer>
      <ChooseWarBandTotalDialog
        open={!openWarbandDialog}
        warbandTotal={warbandTotal}
        onClose={handleClose}
      />
      <RestartConfirmationDialog
        open={openRestartAlert}
        onClickRestart={onClickRestart}
        onClose={() => setOpenRestartAlert(false)}
      />
      <ExceededWarbandTotalAlert open={exceededWarbandTotal} />
    </>
  );
};

export default AddUnitsView;
