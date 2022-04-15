import { useState } from 'react';

import { useLogin } from '../../Api/EndPoints/useLogin';

export const Login = () => {
    const login = useLogin();
    const [username] = useState('poprostumieciek');
    const [password] = useState('admin123456');

    const handleClick = () => {
        login.mutate({
            username,
            password
        });
    };

    return (
        <>
            <button onClick={handleClick}>login</button>
        </>
    );
};
