import Lock from '@mui/icons-material/Lock';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useForgotPassword } from '../../Api/EndPoints/useForgotPassword';
import { theme } from '../../config/theme';
import { toastNotify } from '../../utils/ToastNotify';
import { ForgotPasswordValues } from '../../utils/types/formValues';

export const ForgotPassword = () => {
    const { handleSubmit, register } = useForm<ForgotPasswordValues>();
    const forgotPassword = useForgotPassword();
    const onSubmit = (data: ForgotPasswordValues) => {
        forgotPassword
            .mutateAsync({
                email: data.email
            })
            .then(() => {
                toastNotify(200, 'Email sended');
            })
            .catch(() => {
                toastNotify(400, 'Something went wrong');
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
                    Forgot Password?
                </Typography>
                <form
                    style={{ width: '100%' }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        {...register('email')}
                        variant='outlined'
                        required
                        label='Email'
                        type='email'
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
                        Send email
                    </Button>
                </form>
            </Box>
        </div>
    );
};
