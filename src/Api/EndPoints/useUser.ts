import { useQuery } from 'react-query';

import { User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useUser = (id = '@me') => {
    return useQuery<User | null>(
        ['user', id],
        async () => {
            return (await AuthService.user(id)).data;
        },
        { retry: false }
    );
};
