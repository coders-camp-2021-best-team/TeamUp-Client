import { request } from '../../Axios/Axios';
import {
    Login,
    Post,
    PostAttachment,
    PostVote,
    PostVotes,
    PostVoteType,
    QueryPostDto,
    Register,
    User
} from '../../utils/types/apiTypes';

export const AuthService = {
    login: (login: Login) => request.post<User>('/auth/login', login),

    logout: () => request.post('/auth/logout'),

    register: (register: Register) =>
        request.post<Register>('/auth/register', register),

    user: (id: string) => request.get<User>(`/user/${id}`),

    posts: (params: QueryPostDto) => request.get<Post[]>('/post', { params }),
    postAttachments: (id: string) =>
        request.get<PostAttachment[]>(`/post/${id}/attachment`),
    postVotes: (id: string) => request.get<PostVotes>(`/post/${id}/vote`),
    postVote: (id: string, type: PostVoteType) =>
        request.post<PostVote>(`/post/${id}/vote`, { type }),
    postRemoveVote: (id: string) => request.delete<PostVote>(`/post/${id}/vote`)
};
