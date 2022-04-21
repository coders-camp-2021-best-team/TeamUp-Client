import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { useRegister } from '../../Api/EndPoints/useRegister';
import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';
import { Register as RegisterDTO } from '../../utils/types/apiTypes';

export const Register = () => {
    const { register, handleSubmit } = useForm<
        RegisterDTO & { confirm_password: string }
    >();
    const registerHook = useRegister();
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
                registerHook
                    .mutateAsync(data)
                    .then(() => navigate(ROUTES.LOGIN))
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
                        {...register('first_name', { required: true })}
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
                        {...register('last_name', { required: true })}
                    />
                </Box>
                <TextField
                    variant='outlined'
                    required
                    label='Username'
                    {...register('username', { required: true, minLength: 3 })}
                />
                <TextField
                    variant='outlined'
                    required
                    label='Email Address'
                    type='email'
                    {...register('email', {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })}
                />
                <TextField
                    variant='outlined'
                    required
                    label='Password'
                    type='password'
                    {...register('password', { required: true, minLength: 8 })}
                />
                <TextField
                    variant='outlined'
                    required
                    label='Confirm Password'
                    type='password'
                    {...register('confirm_password', { required: true })}
                />
                {/* TODO: ADD VALIDATION FOR CONFIRM PASSWORD */}
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
        </form>
    );
};
