import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { UpdateUserDto, User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useUpdateUser = (id: string) => {
    return useMutation<User, AxiosError, UpdateUserDto>(
        async (data) => (await AuthService.updateUser(id, data)).data
    );
};
