import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const EmailConfirmation = () => {
    return (
        <Box
            sx={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Avatar
                sx={{
                    m: 1,
                    bgcolor: 'primary.main',
                    width: '50px',
                    height: '50px'
                }}
            >
                <CheckRoundedIcon
                    sx={{ fontSize: '36px', color: 'text.primary' }}
                />
            </Avatar>
            <Typography component='h1' variant='h6' color='background.paper'>
                Congrats, successfully confirmation mail
            </Typography>
        </Box>
    );
};
