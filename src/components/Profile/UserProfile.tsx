import { Avatar, Box, Typography } from '@mui/material';

import { useOurMedia } from '../../hooks';
import { Description } from './description';

//TODO connect screen to API
export const UserProfile = () => {
    const isPhoneSize = useOurMedia();
    return (
        <>
            {isPhoneSize ? (
                <>
                    <Box
                        component='img'
                        alt='Profile Picture'
                        src='https://source.unsplash.com/random'
                        width='100%'
                        height='60vh'
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
            ) : (
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
            )}
        </>
    );
};
