// import { DataArraySharp } from '@mui/icons-material';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SyncIcon from '@mui/icons-material/Sync';
import { Box, Fab } from '@mui/material';
import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { useUpdateUser } from '../../Api/EndPoints/useUpdateUser';
import { useUser } from '../../Api/EndPoints/useUser';
import { ROUTES } from '../../routes/Routes';
import { UpdateUserDto } from '../../utils/types/apiTypes';

export const EditProfile = () => {
    const { data: user } = useUser();
    const updateUser = useUpdateUser(user?.id || '');
    const { register, handleSubmit } = useForm<UpdateUserDto>({
        defaultValues: user
    });

    const [process, setProcess] = useState({
        icon: <SaveRoundedIcon />,
        label: 'Save'
    });

    const handleClick = () => {
        setProcess({ icon: <SyncIcon />, label: 'Loading' });

        handleSubmit((data) =>
            updateUser.mutate({
                ...data,
                new_password: data.new_password || undefined
            })
        )()
            .then(() => {
                setProcess({ icon: <DoneRoundedIcon />, label: 'Saved!' });
            })
            .finally(() => {
                setTimeout(() => {
                    setProcess({ icon: <SaveRoundedIcon />, label: 'Save' });
                }, 1000);
            });
    };

    if (!user) return null;

    return (
        <form>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '10px 10px 0'
                }}
            >
                <NavLink
                    to={`${ROUTES.PROFILE}/${user.username}`}
                    style={{ textDecoration: 'none' }}
                >
                    <Button variant='contained' size='small' type='submit'>
                        BACK
                    </Button>
                </NavLink>
                <Button
                    variant='contained'
                    size='small'
                    color='success'
                    startIcon={process.icon}
                    onClick={handleClick}
                >
                    {process.label}
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    justifyItems: 'center',
                    position: 'relative',
                    padding: '5px 15px 0'
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
                        top: '90%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        marginLeft: '60px'
                    }}
                >
                    <EditRoundedIcon sx={{ fontSize: '20px' }} />
                </Fab>
            </Box>
            <Box sx={{ margin: '20px 10px' }}>
                <TextField
                    label='Current Password'
                    type='password'
                    variant='outlined'
                    required
                    autoComplete='current_password'
                    {...register('current_password', { required: true })}
                />
                <TextField
                    label='Email'
                    type='email'
                    variant='outlined'
                    {...register('email')}
                />
                <TextField
                    label='Username'
                    variant='outlined'
                    {...register('username')}
                    autoComplete='username'
                />
                <TextField
                    label='First Name'
                    variant='outlined'
                    {...register('first_name')}
                />
                <TextField
                    label='Last Name'
                    variant='outlined'
                    {...register('last_name')}
                />
                <TextField
                    label='New Password (leave blank to not change)'
                    variant='outlined'
                    {...register('new_password')}
                    type='password'
                    autoComplete='new-password'
                />
                <TextField
                    variant='outlined'
                    label='Birthdate'
                    type='date'
                    {...register('birthdate')}
                    sx={{
                        label: {
                            display: 'none'
                        },
                        '& label.Mui-focused': {
                            display: 'block',
                            color: '#fff'
                        }
                    }}
                />
                <TextField
                    label='Biogram'
                    multiline
                    rows={3}
                    {...register('biogram')}
                    sx={{
                        '& label.Mui-focused': { color: '#fff' },
                        margin: '10px 0'
                    }}
                />
                {/* TODO: !!!!!!!!! EDIT SKILLS */}
                {/* <Grid container spacing={2} width='100%'>
                    {content.map((box) => (
                        <Grid item key={box}>
                            <Chip
                                label='Jakaś gra'
                                variant='outlined'
                                // onDelete={handleDelete}
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
                </Fab> */}
            </Box>
        </form>
    );
};
