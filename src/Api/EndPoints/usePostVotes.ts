import { useQuery } from 'react-query';

import { PostVotes } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const usePostVotes = (id: string) => {
    return useQuery<PostVotes>(
        ['post_votes', id],
        async () => (await AuthService.postVotes(id)).data,
        { staleTime: 20000 }
    );
};
