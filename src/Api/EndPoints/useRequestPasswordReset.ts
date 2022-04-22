import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { AuthService } from '../client/AuthService';

export const useRequestPasswordReset = () => {
    return useMutation<string, AxiosError, string>(async (email) => {
        return (await AuthService.requestPasswordReset(email)).data;
    });
};
