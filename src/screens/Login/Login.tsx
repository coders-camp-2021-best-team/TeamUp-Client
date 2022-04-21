import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { useLogin } from '../../Api/EndPoints/useLogin';
import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';
import { Login as LoginDTO } from '../../utils/types/apiTypes';

export const Login = () => {
    const { register, handleSubmit } = useForm<LoginDTO>();
    const login = useLogin();
    const navigate = useNavigate();

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}
            onSubmit={handleSubmit((data) =>
                login.mutateAsync(data).then(() => navigate(ROUTES.HOME))
            )}
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
                        height: '70px',
                        [theme.breakpoints.down('tablet')]: {
                            width: '40px',
                            height: '40px'
                        }
                    }}
                >
                    <Lock
                        sx={{
                            fontSize: '48px',
                            color: 'common.white',
                            [theme.breakpoints.down('tablet')]: {
                                fontSize: '24px'
                            }
                        }}
                    />
                </Avatar>
                <Typography
                    component='h1'
                    variant='h4'
                    color='common.white'
                    sx={{
                        [theme.breakpoints.down('tablet')]: {
                            fontSize: '24px'
                        }
                    }}
                >
                    Sign in
                </Typography>
                <TextField
                    variant='outlined'
                    required
                    label='Email Address'
                    {...register('username', { required: true })}
                />
                <TextField
                    variant='outlined'
                    required
                    label='Password'
                    type='password'
                    {...register('password', { required: true, minLength: 8 })}
                />
                <Button
                    variant='contained'
                    sx={{
                        width: '100%'
                    }}
                    type='submit'
                >
                    Sign In
                </Button>
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
                        Don't have an account? Sign up
                    </NavLink>
                </Box>
            </Box>
        </form>
    );
};
