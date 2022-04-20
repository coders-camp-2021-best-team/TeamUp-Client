import { Avatar, Box, Typography } from '@mui/material';

import { useOurMedia } from '../../hooks';
import { User } from '../../utils/types/apiTypes';
import { Description } from './description';

export const UserProfile = ({ user }: { user: User }) => {
    const isPhoneSize = useOurMedia();
    return (
        <>
            {isPhoneSize ? (
                <>
                    <Box
                        component='img'
                        alt='Profile Picture'
                        src={user.avatar}
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
                        {user.first_name} {user.last_name}, {user.birthdate}
                    </Typography>
                    <Description description={user.biogram} />
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
                            src={user.avatar}
                            alt='Profile Picture'
                            sx={{
                                width: 150,
                                height: 150,
                                marginBottom: '5vh'
                            }}
                        />
                        <Typography color='white'>
                            {user.first_name} {user.last_name}, {user.birthdate}
                        </Typography>
                    </Box>
                    <Description description={user.biogram} />
                </Box>
            )}
        </>
    );
};
