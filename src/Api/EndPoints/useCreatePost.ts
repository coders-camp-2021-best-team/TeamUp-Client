import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { CreatePost, Post } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useCreatePost = () => {
    return useMutation<Post, AxiosError, CreatePost>(
        async (data) => (await AuthService.createPost(data)).data
    );
};
