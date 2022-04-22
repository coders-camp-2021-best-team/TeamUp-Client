import Lock from '@mui/icons-material/Lock';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { useRequestPasswordReset } from '../../Api/EndPoints/useRequestPasswordReset';
import { theme } from '../../config/theme';
import { toastNotify } from '../../utils/ToastNotify';
import { RequestPasswordReset as RequestPasswordResetDTO } from '../../utils/types/apiTypes';

export const RequestPasswordReset = () => {
    const { handleSubmit, register } = useForm<RequestPasswordResetDTO>();
    const requestPasswordReset = useRequestPasswordReset();

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
                    onSubmit={handleSubmit((data) =>
                        requestPasswordReset
                            .mutateAsync(data.email)
                            .then(() => {
                                toastNotify(
                                    200,
                                    'Check your email and click the received link.'
                                );
                            })
                    )}
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
                            width: '100%'
                        }}
                        type='submit'
                    >
                        Send Email
                    </Button>
                </form>
            </Box>
        </div>
    );
};
