import { yupResolver } from '@hookform/resolvers/yup';
import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { usePasswordReset } from '../../Api/EndPoints/usePasswordReset';
import { theme } from '../../config/theme';
import { ROUTES } from '../../routes/Routes';
import { toastNotify } from '../../utils/ToastNotify';
import { ResetPassword as ResetPasswordDTO } from '../../utils/types/apiTypes';

export const ResetPassword = () => {
    const { token } = useParams();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ResetPasswordDTO>({
        resolver: yupResolver(
            Yup.object().shape({
                password: Yup.string()
                    .required()
                    .min(8, 'Password must be at least 8 characters long.'),
                confirm_password: Yup.string().oneOf(
                    [Yup.ref('password')],
                    "Passwords don't match."
                )
            })
        )
    });
    const passwordReset = usePasswordReset(token || '');
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
                    Reset Password
                </Typography>

                <form
                    style={{ width: '100%' }}
                    onSubmit={handleSubmit((data) => {
                        passwordReset.mutateAsync(data).then(() => {
                            navigate(ROUTES.LOGIN);
                            toastNotify(
                                200,
                                'Password has been successfully changed.'
                            );
                        });
                    })}
                >
                    <TextField
                        {...register('password')}
                        variant='outlined'
                        required
                        label='New Password'
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
                        label='Repeat Password'
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
                        Change Password
                    </Button>
                </form>
            </Box>
        </div>
    );
};
