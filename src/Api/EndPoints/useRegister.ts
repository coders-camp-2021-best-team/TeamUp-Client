import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { Register } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useRegister = () => {
    return useMutation<Register, AxiosError, Register>(
        async (v) => (await AuthService.register(v)).data
    );
};
