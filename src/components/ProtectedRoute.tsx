import { Navigate } from 'react-router-dom';

import { useUser } from '../Api/EndPoints/useUser';
import { SocketContextProvider } from '../Api/SocketIO';
import { ROUTES } from '../routes/Routes';

type Props = {
    children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
    const user = useUser();

    if (user.isLoading) return null;

    if (!user.data) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <SocketContextProvider>{children}</SocketContextProvider>;
};
