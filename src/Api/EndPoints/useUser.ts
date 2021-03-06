import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { useQuery } from 'react-query';

import { toastNotify } from '../../utils/ToastNotify';
import { User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useUser = (id = '@me') => {
    return useQuery<User>(
        id === '@me' ? 'current_user' : ['user', 'id', id],
        async () => {
            return (await AuthService.userByID(id)).data;
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
