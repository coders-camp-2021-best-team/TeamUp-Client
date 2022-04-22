import { yupResolver } from '@hookform/resolvers/yup';
import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useRegister } from '../../Api/EndPoints/useRegister';
import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';
import { toastNotify } from '../../utils/ToastNotify';
import { Register as RegisterDTO } from '../../utils/types/apiTypes';

export const Register = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setError
    } = useForm<RegisterDTO & { confirm_password: string }>({
        resolver: yupResolver(
            Yup.object().shape({
                email: Yup.string().email(),
                username: Yup.string()
                    .required()
                    .min(3, 'Username must be 8 - 64 characters long.')
                    .max(64, 'Username must be 8 - 64 characters long.'),
                password: Yup.string()
                    .required()
                    .min(8, 'Password must be at least 8 characters long.'),
                first_name: Yup.string().required(),
                last_name: Yup.string().required(),
                birthdate: Yup.date().max(
                    new Date(Date.now() - 16 * 365 * 24 * 60 * 60 * 1000),
                    'You need to be at least 16 years old to create an account.'
                ),
                confirm_password: Yup.string()
                    .required()
                    .oneOf([Yup.ref('password')], "Passwords don't match.")
            })
        )
    });
    const registerHook = useRegister();
    const navigate = useNavigate();

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

                <form
                    onSubmit={handleSubmit((data) =>
                        registerHook
                            .mutateAsync(data)
                            .then(() => {
                                navigate(ROUTES.LOGIN);
                                toastNotify(
                                    200,
                                    'Account has been successfully created! Check your email and click the confirmation link.'
                                );
                            })
                            .catch((err) => {
                                if (axios.isAxiosError(err))
                                    setError('confirm_password', {
                                        message:
                                            'Account with that email or username already exists.'
                                    });
                                else toastNotify();
                            })
                    )}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDireciotn: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextField
                            {...register('first_name')}
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
                            {...register('last_name')}
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

                    <TextField
                        {...register('username')}
                        variant='outlined'
                        required
                        label='Username'
                        autoComplete='username'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.username?.message}
                    </div>

                    <TextField
                        {...register('email')}
                        variant='outlined'
                        required
                        label='Email Address'
                        type='email'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.email?.message}
                    </div>

                    <TextField
                        {...register('birthdate')}
                        variant='outlined'
                        required
                        label='Birthdate'
                        type='date'
                        sx={{
                            label: {
                                display: 'none'
                            }
                        }}
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.birthdate?.message}
                    </div>

                    <TextField
                        {...register('password')}
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                        autoComplete='new-password'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.password?.message}
                    </div>

                    <TextField
                        {...register('confirm_password')}
                        variant='outlined'
                        required
                        label='Confirm Password'
                        type='password'
                        autoComplete='new-password'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.confirm_password?.message}
                    </div>

                    <Button
                        variant='contained'
                        sx={{
                            width: '100%'
                        }}
                        type='submit'
                    >
                        Sign Up
                    </Button>
                </form>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        marginTop: '2rem'
                    }}
                >
                    <NavLink to={ROUTES.LOGIN}>
                        Already have an account? Sign in
                    </NavLink>
                </Box>
            </Box>
        </div>
    );
};
