import { Box, Typography } from '@mui/material';

import { Description } from './description';

export const MobileProfile = () => {
    return (
        <>
            <Box
                component='img'
                alt='Profile Picture'
                src='https://source.unsplash.com/random'
                width='100%'
                height='40vh'
                sx={{
                    borderRadius: '6px'
                }}
            />
            <Typography variant='h5' sx={{ flexGrow: 1 }} margin='2vh 5.5vw'>
                Jan Kowalski, 22
            </Typography>
            <Description />
        </>
    );
};
