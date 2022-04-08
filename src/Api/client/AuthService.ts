import { request } from '../../Axios/Axios';
import { Login } from '../../Utils/types';

export const AuthService = {
    postLogin: ({ username, password }: Login) =>
        request.post<Login>('/auth/login', { username, password })
};
