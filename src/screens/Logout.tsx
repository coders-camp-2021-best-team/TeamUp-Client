import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogout } from '../Api/EndPoints/useLogout';
import { ROUTES } from '../routes/Routes';

export const Logout = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    useEffect(() => {
        logout.mutateAsync().then(() => navigate(ROUTES.HOME));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};
