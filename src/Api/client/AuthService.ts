import { request } from '../../Axios/Axios';
import { Login, Register, User } from '../../utils/types/apiTypes';

export const AuthService = {
    login: (login: Login) => request.post<User>('/auth/login', login),

    register: (register: Register) =>
        request.post<Register>('/auth/register', register),

    user: (id: string) => request.get<User>(`/user/${id}`)
};
