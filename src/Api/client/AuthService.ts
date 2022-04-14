import { request } from '../../Axios/Axios';
import { Login, Register, User } from '../../utils/types/apiTypes';

export const AuthService = {
    postLogin: (login: Login) => request.post<User>('/auth/login', login),

    postRegister: (register: Register) =>
        request.post<Register>('/auth/register', register)
};
