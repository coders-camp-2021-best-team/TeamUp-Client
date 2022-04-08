import { Avatar, Box, Typography } from '@mui/material';

import { Description } from './description';

export const DesktopProfile = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                marginTop: '3vh'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 3vh'
                }}
            >
                <Avatar
                    src='https://source.unsplash.com/random'
                    alt='Profile Picture'
                    sx={{
                        width: 150,
                        height: 150,
                        marginBottom: '5vh'
                    }}
                />
                <Typography color='white'>Jan Kowalski, 22</Typography>
            </Box>
            <Description />
        </Box>
    );
};
