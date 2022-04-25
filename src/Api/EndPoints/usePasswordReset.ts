import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { ResetPassword } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const usePasswordReset = (token: string) => {
    return useMutation<string, AxiosError, ResetPassword>(async (data) => {
        return (await AuthService.passwordReset(token, data)).data;
    });
};
