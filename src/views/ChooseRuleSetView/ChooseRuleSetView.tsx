import React, {useContext} from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ContentContainer from '../../components/ContentContainer';
import ChooseRuleSetButton from './ChooseRuleSetButton';
import fantasyIMG from '../../assets/rulesets/fantasy.jpg';
import darkAgesIMG from '../../assets/rulesets/dark_ages.jpg';
import {StateContext} from "../../app/state";
import {useNavigate} from "react-router";
import ROUTES from "../../app/routes";

const ChooseRuleSetView = () => {
    const state = useContext(StateContext);
    const navigate = useNavigate()
    return (
        <ContentContainer>
            <Grid>
                <Typography variant="h3">RULE SET</Typography>
            </Grid>
            <Grid
                container
                alignItems="center"
                justifyContent="space-around"
                direction="row"
                gap={2}
                height="547px"
            >
                <Grid xs height="100%">
                    <ChooseRuleSetButton image={fantasyIMG} ruleSetName="FANTASY" />
                </Grid>
                <Grid xs height="100%">
                    <ChooseRuleSetButton image={darkAgesIMG} ruleSetName="DARK AGES" />
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="flex-start" gap="10px">
                <Button variant="outlined" onClick={() => navigate(ROUTES.START_SCREEN)}>BACK</Button>
            </Grid>
        </ContentContainer>
    );
}

export default ChooseRuleSetView;
