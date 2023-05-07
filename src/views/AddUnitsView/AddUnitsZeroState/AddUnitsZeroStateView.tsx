import React, { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ContentContainer from "../../../components/ContentContainer";
import ChooseWarBandTotalDialog from "../../../components/ChooseWarBandTotalDialog";
import AddUnitsZeroStateAction from "./AddUnitsZeroStateAction";
import { FactionId, Model } from "../../../types";
import AddUnitsViewHeader from "../components/AddUnitsViewHeader";
import AddUnitsViewFooter from "../components/AddUnitsViewFooter";

interface Props {
  faction: FactionId;
  warbandTotal: number;
  onClickBack: () => void;
  onClickAdd: () => void;
  setWarbandTotal: (warbandTotal: number) => void;
  models: Record<string, Model>;
}

const AddUnitsZeroStateView: FunctionComponent<Props> = ({
  faction,
  warbandTotal,
  setWarbandTotal,
  onClickBack,
  onClickAdd,
  models,
}) => {
  const [open, setOpen] = React.useState(warbandTotal === 0);

  const handleClose = (value: number) => {
    setOpen(!open);
    setWarbandTotal(value);
  };
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
          <Grid>
            <AddUnitsZeroStateAction onClickAdd={onClickAdd} />
          </Grid>
          <AddUnitsViewFooter
            onClickBack={onClickBack}
            onClickEditWarbandTotal={() => setOpen(!open)}
          />
        </Grid>
      </ContentContainer>
      <ChooseWarBandTotalDialog
        open={open}
        warbandTotal={warbandTotal}
        onClose={handleClose}
      />
    </>
  );
};

export default AddUnitsZeroStateView;
