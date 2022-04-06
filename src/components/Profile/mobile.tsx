import { Box, Grid, Typography } from '@mui/material';

export const MobileProfile = () => {
    const content = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Box
                component='img'
                alt='Profile Picture'
                src='https://source.unsplash.com/random'
                width='100%'
                maxHeight='30%'
                sx={{
                    borderRadius: '8px'
                }}
            />
            <Typography
                variant='h5'
                sx={{ flexGrow: 1 }}
                margin='25px'
                color='#eee'
            >
                Jan Kowalski, 22
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'primary.light',
                    paddingTop: '10px',
                    paddingBottom: '100px',
                    margin: '20px',
                    borderRadius: '8px'
                }}
            >
                <Typography margin='10px'>About</Typography>
                <Typography margin='10px'>
                    I watched the storm, so beautiful yet terrific.
                </Typography>
            </Box>
            <Grid container spacing={2} width='90%' marginLeft='5px'>
                {content.map((box) => (
                    <Grid item key={box} xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: 'primary.light',
                                borderRadius: '14px',
                                padding: '5px'
                            }}
                        >
                            <Typography variant='body2'>
                                Chip content
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
