import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

export const Login = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Box
                sx={{
                    margin: '120px 80px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '25%'
                }}
            >
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: 'primary.main',
                        width: '70px',
                        height: '70px'
                    }}
                >
                    <Lock sx={{ fontSize: '48px', color: 'common.white' }} />
                </Avatar>
                <Typography component='h1' variant='h4' color='common.white'>
                    Sign in
                </Typography>
                <TextField variant='outlined' required label='Email Address' />
                <TextField variant='outlined' required label='Password' />
                <FormControlLabel
                    label='Remember me'
                    control={<Checkbox />}
                    sx={{
                        alignSelf: 'flex-start'
                    }}
                />
                <Button variant='contained'>Sign In</Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginTop: '2rem'
                    }}
                >
                    <NavLink to={ROUTES.RESET_PASSWORD}>
                        Forgot password?
                    </NavLink>
                    <NavLink to={ROUTES.REGISTER}>
                        Don't have an account? Sing up
                    </NavLink>
                </Box>
            </Box>
        </div>
    );
};
