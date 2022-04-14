import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { queryClient } from '../..';
import { Login, User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useLogin = () => {
    return useMutation<User, AxiosError, Login>(
        'current_user',
        async (v) => (await AuthService.postLogin(v)).data,
        {
            onSuccess: (user) => {
                queryClient.setQueryData('current_user', () => user);
            }
        }
    );
};
