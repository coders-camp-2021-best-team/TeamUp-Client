import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { Box, Fab, Typography } from '@mui/material';

export const Feed = () => {
    const content = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Box
                component='img'
                alt='Profile Picture'
                src='https://source.unsplash.com/random'
                width='100%'
                padding='2rem 1rem 1rem'
                maxHeight='60vh'
                minHeight='60vh'
                sx={{
                    borderRadius: '6px',
                    position: 'relative'
                }}
            />
            <Fab
                color='warning'
                aria-label='info'
                sx={{
                    width: '46px',
                    height: '46px',
                    position: 'absolute',
                    top: '62%',
                    right: '45%'
                }}
            >
                <PermIdentityRoundedIcon sx={{ fontSize: '32px' }} />
            </Fab>
            <Typography
                variant='h5'
                sx={{ flexGrow: 1 }}
                margin='2vw 5.5vw'
                color='white'
            >
                Jan Kowalski, 22
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '0 2vh'
                }}
            >
                {content.map(() => (
                    <Box
                        sx={{
                            backgroundColor: 'primary.main',
                            borderRadius: '16px',
                            padding: '8px',
                            margin: '1vh 0',
                            marginRight: '1.5vh'
                        }}
                    >
                        <Typography variant='body2'>Chip content</Typography>
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '10rem',
                    margin: '1rem 2rem',
                    justifyContent: 'center'
                }}
            >
                <Fab color='error' aria-label='cancel'>
                    <CloseRoundedIcon sx={{ fontSize: '32px' }} />
                </Fab>
                <Fab color='success' aria-label='approve'>
                    <SportsEsportsRoundedIcon sx={{ fontSize: '32px' }} />
                </Fab>
            </Box>
        </>
    );
};
