import { useQuery } from 'react-query';

import { Feed } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useFeed = () => {
    return useQuery<Feed>(
        'feed',
        async () => (await AuthService.getFeed()).data
    );
};
