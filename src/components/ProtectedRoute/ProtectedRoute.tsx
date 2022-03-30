import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

interface Props {
    children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props): JSX.Element => {
    const user = true;
    if (user) {
        return children;
    }
    return <Navigate to={ROUTES.HOME} replace />;
};
