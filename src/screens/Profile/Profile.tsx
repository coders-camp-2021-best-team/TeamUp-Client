import { Navigate, useParams } from 'react-router-dom';

import { useUser } from '../../Api/EndPoints/useUser';
import { UserProfile } from '../../components';
import { ROUTES } from '../../routes/Routes';

export const Profile = () => {
    const { id } = useParams();
    const user = useUser(id);

    if (user.isLoading) return null;

    if (!user.data) return <Navigate to={ROUTES.NOT_FOUND} />;

    return <UserProfile user={user.data} />;
};
