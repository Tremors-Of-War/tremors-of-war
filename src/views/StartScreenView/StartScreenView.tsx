import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import StartLogo from '../../assets/images/start_logo.png';
import ContentContainer from '../../components/ContentContainer';
import {useNavigate} from "react-router";
import ROUTES from "../../app/routes";

const StartScreenView = () => {
    const navigate = useNavigate()
    return (
        <ContentContainer hideTopLogo>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: '100%',
                    width: '100%',
                    background: `url(${StartLogo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '684px 164px',
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
                <Button variant="outlined">IMPORT LIST</Button>
                <Button variant="contained" onClick={() => navigate(ROUTES.CHOOSE_RULESET)}>NEW LIST</Button>
            </Grid>
        </ContentContainer>
    );
}

export default StartScreenView;
