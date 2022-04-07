import { Box, Typography } from '@mui/material';

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
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'primary.light',
                    paddingTop: '10px',
                    paddingBottom: '50px',
                    margin: '20px',
                    borderRadius: '8px'
                }}
            >
                <Typography margin='10px'>About</Typography>
                <Typography margin='10px'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore maiores sequi, qui, ab ducimus hic ullam incidunt
                    laudantium beatae consequatur in quas doloribus delectus
                    tenetur fugit, consectetur officiis dolorum dignissimos.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginLeft: '15px'
                }}
            >
                {content.map((box) => (
                    <Box
                        sx={{
                            backgroundColor: 'primary.light',
                            borderRadius: '14px',
                            padding: '5px',
                            margin: '5px 5px'
                        }}
                    >
                        <Typography variant='body2'>Chip content</Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
};
