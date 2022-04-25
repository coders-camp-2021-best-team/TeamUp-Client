import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { queryClient } from '../..';
import { AuthService } from '../client/AuthService';

export const useLogout = () => {
    return useMutation<unknown, AxiosError>(async () => {
        const logout = await (await AuthService.logout()).data;

        queryClient.getQueryCache().clear();

        return logout;
    });
};
