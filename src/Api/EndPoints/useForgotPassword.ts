import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { ForgotPassword } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useForgotPassword = () => {
    return useMutation<unknown, AxiosError, ForgotPassword>(
        async (v) => (await AuthService.forgotPassword(v)).data
    );
};
