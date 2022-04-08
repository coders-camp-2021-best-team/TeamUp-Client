import { agent } from '../../Axios/Axios';
import { useRequest } from '../../hooks/useApi';
import { Login, MappedResponse } from '../../Utils/types';

export const useLogin = (args: Login): MappedResponse<Login> => {
    const { data, isLoading, isError } = useRequest<Login, Login>(
        agent.AuthService.postLogin,
        args,
        'login'
    );

    return { data, isError, isLoading };
};
