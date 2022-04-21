import { Navigate, useParams } from 'react-router-dom';

import { useUserByUsername } from '../../Api/EndPoints/useUserByUsername';
import { UserProfile } from '../../components';
import { ROUTES } from '../../routes/Routes';

export const Profile = () => {
    const { username } = useParams();
    const user = useUserByUsername(username || '');

    if (user.isLoading) return null;

    if (!user.data) return <Navigate to={ROUTES.NOT_FOUND} replace />;

    return <UserProfile user={user.data} />;
};
