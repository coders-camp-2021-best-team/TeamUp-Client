import { request } from '../../Axios/Axios';
import { Login, TestType } from '../../Utils/types';

export const AuthService = {
    postLogin: ({ email, password }: Login) =>
        request.post<Login>('/auth/login', { email, password })
};

export const TestService = {
    getChat: ({ email, password }: TestType) =>
        request.post<TestType>('/auth/login', { email, password })
};
