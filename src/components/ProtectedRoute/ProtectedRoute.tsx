import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

type Props = {
    children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
    const user = true; //TODO connect with BE
    if (user) {
        return children;
    }
    return <Navigate to={ROUTES.HOME} replace />;
};
