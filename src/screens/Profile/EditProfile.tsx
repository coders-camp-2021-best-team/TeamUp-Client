import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Box, Fab, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

export const EditProfile = () => {
    const content = [1, 2, 3, 4, 5, 6];

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    justifyItems: 'center',
                    position: 'relative',
                    padding: '15px 15px 0 15px'
                }}
            >
                <Box
                    component='img'
                    alt='Profile Picture'
                    src='https://cdn.landesa.org/wp-content/uploads/default-user-image.png'
                    width='100%'
                    maxWidth='150px'
                    height='150px'
                    sx={{
                        borderRadius: '50%',
                        display: 'block',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Fab
                    onClick={() => console.log('click')}
                    color='primary'
                    aria-label='upload img'
                    sx={{
                        width: '30px',
                        height: '30px',
                        minHeight: '30px',
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <EditRoundedIcon sx={{ fontSize: '20px' }} />
                </Fab>
            </Box>
            <Box sx={{ margin: '20px 10px' }}>
                <TextField
                    id='firstname-basic'
                    label='First name'
                    variant='outlined'
                    sx={{
                        '& label.Mui-focused': { color: '#fff' },
                        margin: '10px 0'
                    }}
                />
                <TextField
                    id='lastname-basic'
                    label='Last name'
                    variant='outlined'
                    sx={{
                        '& label.Mui-focused': { color: '#fff' },
                        margin: '10px 0'
                    }}
                />
                <TextField
                    id='username-basic'
                    label='Username'
                    variant='outlined'
                    sx={{
                        '& label.Mui-focused': { color: '#fff' },
                        margin: '10px 0'
                    }}
                />
                <TextField
                    id='birthday-basic'
                    label='Birthday'
                    variant='outlined'
                    sx={{
                        '& label.Mui-focused': { color: '#fff' },
                        margin: '10px 0'
                    }}
                />
                <TextField
                    id='biogram-basic'
                    label='Biogram'
                    variant='outlined'
                    sx={{
                        '& label.Mui-focused': { color: '#fff' },
                        margin: '10px 0'
                    }}
                />
                <Grid container spacing={2} width='100%'>
                    {content.map((box) => (
                        <Grid item key={box}>
                            <Chip
                                label='Jakaś gra'
                                variant='outlined'
                                onDelete={handleDelete}
                                sx={{
                                    backgroundColor: '#B2A7FC',
                                    color: '#000'
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Fab
                    onClick={() => console.log('click')}
                    aria-label='add new skill'
                    sx={{
                        backgroundColor: '#B2A7FC',
                        width: '26px',
                        height: '26px',
                        minHeight: '26px',
                        marginTop: '10px'
                    }}
                >
                    <AddRoundedIcon
                        sx={{
                            fontSize: '22px',
                            color: '#000'
                        }}
                    />
                </Fab>
            </Box>
        </>
    );
};
