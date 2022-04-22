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
    const navigate = useNavigate();
    const loginFunc = useLogin();

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors }
    } = useForm<LoginDTO>();

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
                    margin: '120px 0 0',
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

                <form
                    onSubmit={handleSubmit((data) =>
                        loginFunc
                            .mutateAsync(data)
                            .then((result) =>
                                navigate(`${ROUTES.PROFILE}/${result.username}`)
                            )
                            .catch(() =>
                                setError('password', {
                                    message: 'Invalid username or password.'
                                })
                            )
                    )}
                >
                    <TextField
                        {...register('username')}
                        variant='outlined'
                        required
                        label='Username'
                        autoComplete='username'
                    />
                    <TextField
                        {...register('password')}
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                        autoComplete='current-password'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.password?.message}
                    </div>
                    <Button
                        variant='contained'
                        sx={{
                            width: '100%'
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
                    <NavLink to={ROUTES.REQUEST_PASSWORD_RESET}>
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
