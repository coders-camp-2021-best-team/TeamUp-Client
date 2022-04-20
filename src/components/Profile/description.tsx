import { Box, Typography } from '@mui/material';

export const Description = ({ description }: { description: string }) => {
    // TODO replace 'chip content' with appropriate user data
    const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '5vh 4vw',
                    marginTop: '0'
                }}
            >
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
                    <Typography margin='1.5vh 1.5vh'>{description}</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '2vh'
                    }}
                >
                    {content.map(() => (
                        <Box
                            sx={{
                                backgroundColor: 'primary.light',
                                borderRadius: '16px',
                                padding: '8px',
                                margin: '1vh 0',
                                marginRight: '1.5vh'
                            }}
                        >
                            <Typography variant='body2'>
                                Chip content
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};
