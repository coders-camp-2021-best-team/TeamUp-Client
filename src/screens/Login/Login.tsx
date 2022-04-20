import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../../Api/EndPoints/useLogin';
import { ROUTES } from '../../routes/Routes';

export const Login = () => {
    const navigate = useNavigate();
    const login = useLogin();
    const [username] = useState('poprostumieciek');
    const [password] = useState('admin123456');

    const handleClick = () => {
        login
            .mutateAsync({
                username,
                password
            })
            .then(() => navigate(ROUTES.PROFILE + '/@me'));
    };

    return (
        <>
            <button onClick={handleClick}>login</button>
        </>
    );
};
