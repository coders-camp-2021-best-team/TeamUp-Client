import { Box, Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

import { useUserByUsername } from '../../Api/EndPoints/useUserByUsername';
import DEFAULT_AVATAR from '../../assets/defaultImage.jpg';
import { UserProfileDescription } from '../../components';
import { ROUTES } from '../../routes/Routes';
import { CDN } from '../../utils/CDN';

export const Profile = () => {
    const { username } = useParams();
    const user = useUserByUsername(username || '');

    if (user.isLoading) return null;

    if (!user.data) return <Navigate to={ROUTES.NOT_FOUND} replace />;

    const avatarSrc = user.data.avatar ? CDN(user.data.avatar) : DEFAULT_AVATAR;

    return (
        <>
            <Box
                component='img'
                alt='Profile Picture'
                src={avatarSrc}
                width='100%'
                height='60vh'
                sx={{
                    borderRadius: '6px',
                    objectFit: 'cover'
                }}
            />
            <Typography
                variant='h5'
                sx={{ flexGrow: 1 }}
                margin='2vh 5.5vw'
                color='white'
            >
                {user.data.first_name} {user.data.last_name},{' '}
                {user.data.birthdate}
            </Typography>
            <UserProfileDescription user={user.data} />
        </>
    );
};
