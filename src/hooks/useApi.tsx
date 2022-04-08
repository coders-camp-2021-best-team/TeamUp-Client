/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { toastNotify } from '../Utils/ToastNotify';

export function useRequest<T, G>(
    callback: (config: G) => Promise<AxiosResponse<T, G>>,
    args: G,
    tag: string
) {
    const { data, isError, isLoading } = useQuery(tag, async () => {
        try {
            const data = await callback(args);
            return data.data;
        } catch (err: any) {
            const isError = true;
            toastNotify(err.response.status);
            return isError;
        }
    });

    return { data, isError, isLoading };
}
