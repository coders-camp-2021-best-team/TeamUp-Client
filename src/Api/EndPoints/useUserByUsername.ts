import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { useQuery } from 'react-query';

import { toastNotify } from '../../utils/ToastNotify';
import { User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useUserByUsername = (username: string) => {
    return useQuery<User>(
        ['user', 'username', username],
        async () => {
            return (await AuthService.userByUsername(username)).data;
        },
        {
            retry: false,
            onError: (err) => {
                if (
                    axios.isAxiosError(err) &&
                    err.response?.status !== StatusCodes.UNAUTHORIZED
                ) {
                    return toastNotify(err.response?.status);
                }
            }
        }
    );
};
