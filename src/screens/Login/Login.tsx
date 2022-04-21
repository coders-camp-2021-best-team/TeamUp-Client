import Lock from '@mui/icons-material/Lock';
import { Checkbox, FormControlLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { useLogin } from '../../Api/EndPoints/useLogin';
import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';
import { toastNotify } from '../../utils/ToastNotify';
import { LoginValues } from '../../utils/types/formValues';

export const Login = () => {
    const navigate = useNavigate();
    const loginFunc = useLogin();

    const { handleSubmit, register } = useForm<LoginValues>();
    const onSubmit = (data: LoginValues) => {
        loginFunc
            .mutateAsync({
                username: data.username,
                password: data.password
            })
            .then((result) => {
                if (data.rememberMe) {
                    localStorage.setItem('Logged user', result.id);
                }
                navigate(ROUTES.PROFILE + '/' + result.id);
            })
            .catch((err: AxiosError) => {
                if (err.code) {
                    toastNotify(parseInt(err.code), err.message);
                } else {
                    toastNotify();
                }
            });
    };
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('username')}
                        variant='outlined'
                        required
                        label='Username'
                    />
                    <TextField
                        {...register('password')}
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                    />
                    <FormControlLabel
                        label='Remember me'
                        control={
                            <Checkbox
                                {...register('rememberMe')}
                                name='rememberMe'
                            />
                        }
                        sx={{
                            alignSelf: 'flex-start',
                            width: '100%'
                        }}
                    />
                    <Button
                        variant='contained'
                        sx={{
                            [theme.breakpoints.down('tablet')]: {
                                width: '90%'
                            }
                        }}
                        type='submit'
                    >
                        Sign In
                    </Button>
                </form>
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
        </div>
    );
};
