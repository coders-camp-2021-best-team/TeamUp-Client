import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { Login, User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useLogin = () => {
    return useMutation<User, AxiosError, Login>(
        async (v) => (await AuthService.login(v)).data
    );
};
