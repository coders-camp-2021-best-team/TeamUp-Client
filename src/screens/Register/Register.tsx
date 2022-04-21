import { yupResolver } from '@hookform/resolvers/yup';
import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

import { useRegister } from '../../Api/EndPoints/useRegister';
import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';
import { toastNotify } from '../../utils/ToastNotify';
import { RegisterValues } from '../../utils/types/formValues';

export const Register = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mendatory')
            .min(8, 'Password must be at 8 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match')
    });
    const formOptions = { resolver: yupResolver(formSchema) };
    const registerFunc = useRegister();
    const { handleSubmit, register, formState } =
        useForm<RegisterValues>(formOptions);
    const { errors } = formState;
    const onSubmit = (data: RegisterValues) => {
        registerFunc
            .mutateAsync({
                email: data.email,
                username: data.username,
                password: data.password,
                first_name: data.firstName,
                last_name: data.lastName,
                birthdate: data.birthday
            })
            .then(() => toastNotify(200, 'Account has been created'))
            .catch((err: AxiosError) => {
                if (err.code) {
                    toastNotify(parseInt(err.code), err.message);
                } else {
                    toastNotify();
                }
            });
    };
    return (
        <div>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDireciotn: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextField
                            {...register('firstName')}
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
                            {...register('lastName')}
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
                    />
                    <TextField
                        {...register('email')}
                        variant='outlined'
                        required
                        label='Email Address'
                        type='email'
                    />
                    <TextField
                        {...register('birthday')}
                        variant='outlined'
                        required
                        label='Birthday'
                        type='date'
                        sx={{
                            label: {
                                display: 'none'
                            },
                            '.css-12wo0e5-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                {
                                    display: 'block'
                                }
                        }}
                        {...register('firstName', { required: true })}
                    />
                    <TextField
                        {...register('password')}
                        variant='outlined'
                        required
                        label='Password'
                        type='password'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.password?.message}
                    </div>
                    <TextField
                        {...register('confirmPwd')}
                        variant='outlined'
                        required
                        label='Confirm Password'
                        type='password'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.confirmPwd?.message}
                    </div>
                    <Button
                        variant='contained'
                        sx={{
                            [theme.breakpoints.down('tablet')]: {
                                width: '90%'
                            }
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
