import Lock from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { theme } from '../../config/theme';

export const ResetPassword = () => {
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
                <form>
                    <TextField
                        variant='outlined'
                        required
                        label='New Password'
                        type='password'
                    />
                    <TextField
                        variant='outlined'
                        required
                        label='Repeat Password'
                        type='password'
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
                        Save
                    </Button>
                </form>
            </Box>
        </div>
    );
};
