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
                        width: '13vw',
                        height: '13vw',
                        marginBottom: '5vh'
                    }}
                />
                <Typography>Jan Kowalski, 22</Typography>
            </Box>
            <Description />
        </Box>
    );
};
