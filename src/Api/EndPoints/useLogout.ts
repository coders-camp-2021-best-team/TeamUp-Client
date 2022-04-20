import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { AuthService } from '../client/AuthService';

export const useLogout = () => {
    return useMutation<unknown, AxiosError>(
        async () => (await AuthService.logout()).data
    );
};
