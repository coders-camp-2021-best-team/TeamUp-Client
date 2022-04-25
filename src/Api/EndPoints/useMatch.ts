import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { queryClient } from '../..';
import { User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useMatch = () => {
    return useQuery<User, AxiosError>(
        'match',
        async () => (await AuthService.match()).data,
        {
            onError: undefined,
            retry: false,
            onSuccess: () => queryClient.refetchQueries('chat_rooms')
        }
    );
};
