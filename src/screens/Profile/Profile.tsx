import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Navigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useUser } from '../../Api/EndPoints/useUser';
import { useUserByUsername } from '../../Api/EndPoints/useUserByUsername';
import { UserProfileDescription } from '../../components';
import { ROUTES } from '../../routes/Routes';
import { CDN } from '../../utils/CDN';

export const Profile = () => {
    const { username } = useParams();
    const user = useUserByUsername(username || '');

    const { data: currentUser, isLoading: loadingCurrentUser } = useUser();

    const showEditButton = currentUser?.id === user.data?.id;

    if (user.isLoading || loadingCurrentUser) return null;

    if (!user.data) return <Navigate to={ROUTES.NOT_FOUND} replace />;

    return (
        <>
            <Box
                component='img'
                alt='Profile Picture'
                src={CDN(user.data.avatar || '')}
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
            {showEditButton && (
                <NavLink
                    to={ROUTES.EDITPROFILE}
                    style={{
                        textDecoration: 'none',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button variant='contained' size='small'>
                        EDIT PROFILE
                    </Button>
                </NavLink>
            )}
        </>
    );
};
