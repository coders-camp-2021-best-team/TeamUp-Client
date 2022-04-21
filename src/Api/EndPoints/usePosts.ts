import { useQuery } from 'react-query';

import { Post } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const POSTS_PAGE_SIZE = 20;

export const usePosts = (page = 0, query?: string) => {
    return useQuery<Post[]>(
        ['posts', page],
        async () =>
            (
                await AuthService.posts({
                    q: query,
                    skip: page * POSTS_PAGE_SIZE,
                    take: POSTS_PAGE_SIZE
                })
            ).data,
        {
            keepPreviousData: true
        }
    );
};
