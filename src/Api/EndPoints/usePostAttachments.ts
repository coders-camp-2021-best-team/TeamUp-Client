import { useQuery } from 'react-query';

import { PostAttachment } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const usePostAttachments = (id: string) => {
    return useQuery<PostAttachment[]>(
        ['post_attachments', id],
        async () => (await AuthService.postAttachments(id)).data,
        { staleTime: 20000 }
    );
};
