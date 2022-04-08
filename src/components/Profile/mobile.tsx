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
                maxHeight='60vh'
                sx={{
                    borderRadius: '6px'
                }}
            />
            <Typography
                variant='h5'
                sx={{ flexGrow: 1 }}
                margin='2vh 5.5vw'
                color='white'
            >
                Jan Kowalski, 22
            </Typography>
            <Description />
        </>
    );
};
