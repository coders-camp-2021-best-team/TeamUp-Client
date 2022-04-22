import { Box, Typography } from '@mui/material';

import { User } from '../utils/types/apiTypes';

export const UserProfileDescription = ({ user }: { user: User }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: '5vh 4vw',
                marginTop: '0'
            }}
        >
            {user.biogram ? (
                <Box
                    sx={{
                        paddingTop: '2.5vh',
                        paddingBottom: '10vh',
                        backgroundColor: 'primary.main',
                        borderRadius: '6px',
                        color: 'white'
                    }}
                >
                    <Typography margin='0 1.5vh'>About</Typography>
                    <Typography margin='1.5vh 1.5vh'>{user.biogram}</Typography>
                </Box>
            ) : null}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginTop: '2vh'
                }}
            >
                {user.skills?.map(
                    ({
                        level: {
                            name: levelName,
                            game: { name: gameName }
                        },
                        id
                    }) => (
                        <Box
                            key={id}
                            sx={{
                                backgroundColor: 'primary.light',
                                borderRadius: '16px',
                                padding: '8px',
                                margin: '1vh 0',
                                marginRight: '1.5vh'
                            }}
                        >
                            <Typography variant='body2'>
                                {gameName} - {levelName}
                            </Typography>
                        </Box>
                    )
                )}
            </Box>
        </Box>
    );
};
