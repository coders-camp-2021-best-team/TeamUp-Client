import { useQuery } from 'react-query';

import { User } from '../../utils/types/apiTypes';

export const useUser = () => {
    return useQuery<User>('current_user');
};
