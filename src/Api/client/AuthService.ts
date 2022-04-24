import { request } from '../../Axios/Axios';
import {
    CreatePost,
    Feed,
    Login,
    Post,
    PostAttachment,
    PostVote,
    PostVotes,
    PostVoteType,
    QueryPostDto,
    Register,
    ResetPassword,
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

    requestPasswordReset: (email: string) =>
        request.post('/auth/request-password-reset', { email }),
    passwordReset: (token: string, data: ResetPassword) =>
        request.post(`/auth/password-reset/${token}`, data),

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
        request.post<UserSwipe>(`/swipe/${id}`, { status }),

    createPost: (data: CreatePost) => request.post<Post>('/post', data),
    createPostAttachment: async (id: string, file: File) => {
        const formData = new FormData();
        formData.append('attachment', file);
        return request.post<PostAttachment>(`/post/${id}/attachment`, formData);
    },

    activateAccount: (token: string) => request.get(`/auth/activate/${token}`)
};
