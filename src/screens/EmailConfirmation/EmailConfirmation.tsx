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
                    width: '70px',
                    height: '70px'
                }}
            >
                <CheckRoundedIcon
                    sx={{ fontSize: '48px', color: 'text.primary' }}
                />
            </Avatar>
            <Typography
                component='h1'
                variant='h4'
                color='background.paper'
                padding='30px 20px'
            >
                Congrats, e-mail was confirmed successfully!
            </Typography>
        </Box>
    );
};
