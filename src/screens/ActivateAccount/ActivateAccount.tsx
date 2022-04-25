import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useActivateAccount } from '../../Api/EndPoints/useActivateAccount';
import { ROUTES } from '../../routes/Routes';
import { toastNotify } from '../../utils/ToastNotify';

export const ActivateAccount = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const activate = useActivateAccount();

    useEffect(() => {
        if (!token) return;
        activate.mutateAsync(token).then(() => {
            navigate(ROUTES.LOGIN);
            toastNotify(
                200,
                'Account was activated successfully! Now, you can login.'
            );
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};
