import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { AuthService } from '../client/AuthService';

export const useActivateAccount = () => {
    return useMutation<string, AxiosError, string>(
        async (token) => (await AuthService.activateAccount(token)).data
    );
};
