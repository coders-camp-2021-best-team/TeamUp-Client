import { request } from '../../Axios/Axios';
import {
    Feed,
    ForgotPassword,
    Login,
    Post,
    PostAttachment,
    PostVote,
    PostVotes,
    PostVoteType,
    QueryPostDto,
    Register,
    User,
    UserSwipe,
    UserSwipeType
} from '../../utils/types/apiTypes';

export const AuthService = {
    login: (login: Login) => request.post<User>('/auth/login', login),

    logout: () => request.post('/auth/logout'),

    register: (register: Register) =>
        request.post<Register>('/auth/register', register),

    userByID: (id: string) => request.get<User>(`/user/${id}`),
    userByUsername: (username: string) =>
        request.get<User>(`/user/by-username/${username}`),

    forgotPassword: (forgotPassword: ForgotPassword) =>
        request.post('/auth/request-password-reset', forgotPassword),

    posts: (params: QueryPostDto) => request.get<Post[]>('/post', { params }),
    postAttachments: (id: string) =>
        request.get<PostAttachment[]>(`/post/${id}/attachment`),
    postVotes: (id: string) => request.get<PostVotes>(`/post/${id}/vote`),
    postVote: (id: string, type: PostVoteType) =>
        request.post<PostVote>(`/post/${id}/vote`, { type }),
    postRemoveVote: (id: string) =>
        request.delete<PostVote>(`/post/${id}/vote`),

    getFeed: () => request.get<Feed>('/feed'),

    postSwipe: (id: string, status: UserSwipeType) =>
        request.post<UserSwipe>(`/swipe/${id}`, { status })
};
