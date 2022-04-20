import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { queryClient } from '../..';
import { PostVote, PostVoteType } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useVote = (id: string) => {
    return useMutation<PostVote, AxiosError, PostVoteType | 'NONE'>(
        ['post_vote', id],
        async (type) => {
            if (type === 'NONE') {
                return (await AuthService.postRemoveVote(id)).data;
            } else {
                return (await AuthService.postVote(id, type)).data;
            }
        },
        {
            onSuccess: () => queryClient.refetchQueries(['post_votes', id])
        }
    );
};
