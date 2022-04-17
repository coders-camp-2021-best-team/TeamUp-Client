import { Navigate } from 'react-router-dom';

import { ROUTES } from '../routes/Routes';

type Props = {
    children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
    const user = true; // TODO - Add real auth state - https://github.com/coders-camp-2021-best-team/TeamUp-Client/issues/10
    if (user) {
        return children;
    }
    return <Navigate to={ROUTES.HOME} replace />;
};
