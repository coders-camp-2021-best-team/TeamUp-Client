import { request } from '../../Axios/Axios';
import { Login } from '../../utils/types/apiTypes';

export const AuthService = {
    postLogin: ({ username, password }: Login) =>
        request.post<Login>('/auth/login', { username, password })
};
