import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';

export const Register = () => {
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
                    margin: '120px 20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '90%',
                    [theme.breakpoints.up('tablet')]: {
                        width: '383px'
                    }
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
                    Sign up
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDireciotn: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <TextField
                        variant='outlined'
                        required
                        label='First Name'
                        sx={{
                            width: '185px',
                            [theme.breakpoints.down('tablet')]: {
                                width: '49%'
                            }
                        }}
                    />
                    <TextField
                        variant='outlined'
                        required
                        label='Last Name'
                        sx={{
                            width: '185px',
                            [theme.breakpoints.down('tablet')]: {
                                width: '49%'
                            }
                        }}
                    />
                </Box>
                <TextField variant='outlined' required label='Email Address' />
                <TextField variant='outlined' required label='Password' />
                <TextField
                    variant='outlined'
                    required
                    label='Confirm Password'
                />
                <Button
                    variant='contained'
                    sx={{
                        [theme.breakpoints.down('tablet')]: {
                            width: '90%'
                        }
                    }}
                >
                    Sign In
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        marginTop: '2rem'
                    }}
                >
                    <NavLink to={ROUTES.LOGIN}>
                        Already have an account? Sing in
                    </NavLink>
                </Box>
            </Box>
        </div>
    );
};
