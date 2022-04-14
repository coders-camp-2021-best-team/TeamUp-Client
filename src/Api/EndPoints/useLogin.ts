import { agent } from '../../Axios/Axios';
import { useRequest } from '../../hooks/useApi';
import { Login, MappedResponse } from '../../utils/types/apiTypes';

export const useLogin = (
    args: Login,
    toastToggle: boolean
): MappedResponse<Login> => {
    const { data, isLoading, isError } = useRequest<Login, Login>(
        agent.AuthService.postLogin,
        args,
        'login',
        toastToggle
    );

    return { data, isError, isLoading };
};
