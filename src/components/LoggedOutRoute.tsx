import { Navigate } from 'react-router-dom';

import { useUser } from '../Api/EndPoints/useUser';
import { ROUTES } from '../routes/Routes';
type Props = {
    children: JSX.Element;
};

export const LoggedOutRoute = ({ children }: Props) => {
    const user = useUser();

    if (user.isLoading) return null;

    if (user.data) {
        return <Navigate to={ROUTES.HOME} replace />;
    }

    return children;
};
