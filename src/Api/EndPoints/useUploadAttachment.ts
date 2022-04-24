import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { PostAttachment } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useUploadAttachment = () => {
    return useMutation<PostAttachment, AxiosError, { id: string; file: File }>(
        async ({ id, file }) =>
            (await AuthService.createPostAttachment(id, file)).data
    );
};
