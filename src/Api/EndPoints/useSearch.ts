import { useQuery } from 'react-query';

import { User } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useSearch = (query?: string) => {
    return useQuery<User[]>(
        ['search', query],
        async () =>
            query
                ? (
                      await AuthService.search({
                          q: query
                      })
                  ).data
                : [],
        {
            keepPreviousData: true
        }
    );
};
