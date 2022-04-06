import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { agent } from '../Axios/Axios';
import { Login } from '../Utils/types';

function useRequest<T, G>(
    callback: (config: G) => Promise<AxiosResponse<T, G>>,
    args: G,
    tag: string
) {
    const { data, isLoading } = useQuery(tag, async () => {
        try {
            const data = await callback(args);
            // Run success toast
        } catch (err) {
            // Run error toast
            console.error(err);
        }
    });

    return { data, isLoading };
}

type MappedResponse<T> = {
    data: T;
    isLoading: boolean;
    isError: boolean;
};

const useLogin = (args: Login): MappedResponse<Login> => {
    const { data, isLoading } = useRequest<Login, Login>(
        agent.AuthService.postLogin,
        args,
        'login'
    );

    return { data, isLoading };
};

const TestComponent = () => {
    const { data } = useLogin({ email: 'xd', password: 'xd' });
};
