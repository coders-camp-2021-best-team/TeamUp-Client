import { useState } from 'react';

import { useRegister } from '../../Api/EndPoints/useRegister';

export const Register = () => {
    const register = useRegister();
    const [username] = useState('poprostumieciek');
    const [password] = useState('admin123456');

    const handleClick = () => {
        register.mutate({
            email: `${username}@localhost.com`,
            username,
            password,
            birthdate: new Date(2005, 7, 17).toISOString(),
            first_name: username,
            last_name: username
        });
    };

    return (
        <>
            <button onClick={handleClick}>register</button>
        </>
    );
};
