import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import { Box, Fab, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';
import { style } from './Home.style';

export const Home = () => {
    return (
        <Box sx={style.pageBox}>
            <Box sx={style.logoBox}>
                <Typography component={'h1'} variant='h2' color='white'>
                    TeamUp
                </Typography>
                <Fab color='primary' aria-label='logo' sx={style.fabLogo}>
                    <GamepadRoundedIcon sx={{ fontSize: '48px' }} />
                </Fab>
            </Box>
            <Typography variant='h6' color='white' sx={style.firstTypography}>
                Don't wait anymore, find <br /> out your game mate now
            </Typography>
            <NavLink to={ROUTES.REGISTER} style={style.linkText}>
                <Button
                    variant='contained'
                    sx={{
                        width: '100%'
                    }}
                >
                    REGISTER NOW
                </Button>
            </NavLink>
            <Typography variant='h6' color='white' sx={{ margin: '15px auto' }}>
                OR
            </Typography>
            <NavLink to={ROUTES.LOGIN} style={style.linkText}>
                <Button
                    variant='contained'
                    sx={{
                        width: '100%'
                    }}
                >
                    SIGN IN
                </Button>
            </NavLink>
            <Typography variant='h6' color='white' sx={style.firstTypography}>
                Do you like playing games <br /> but you don't have anyone to
                play with?
            </Typography>
            <Typography variant='h5' color='white' sx={style.secondTypography}>
                You've come to the right place!
            </Typography>
            <Typography variant='h6' color='white' sx={style.firstTypography}>
                Swipe right <br /> and find new friends <br /> who just like you
                want to have fun <br /> playing their favorite games.
            </Typography>
        </Box>
    );
};
