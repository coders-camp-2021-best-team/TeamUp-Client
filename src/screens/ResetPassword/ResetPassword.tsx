import { yupResolver } from '@hookform/resolvers/yup';
import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { theme } from '../../config/theme';
import { ResetPasswordValues } from '../../utils/types/formValues';

export const ResetPassword = () => {
    const { id } = useParams();
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mendatory')
            .min(8, 'Password must be at 8 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match')
    });
    const formOptions = { resolver: yupResolver(formSchema) };
    const { handleSubmit, register, formState } =
        useForm<ResetPasswordValues>(formOptions);
    const { errors } = formState;
    const onSubmit = (data: ResetPasswordValues) => {
        console.log(data); //TODO: Connect with API
        console.log(id);
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        {...register('password')}
                        variant='outlined'
                        required
                        label='New Password'
                        type='password'
                    />
                    <div className='invalid-feedback' style={{ color: 'red' }}>
                        {errors.password?.message}
                    </div>
                    <TextField
                        {...register('confirmPwd')}
                        variant='outlined'
                        required
                        label='Repeat Password'
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
                        Save
                    </Button>
                </form>
            </Box>
        </div>
    );
};
