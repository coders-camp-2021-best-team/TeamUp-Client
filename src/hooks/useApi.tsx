/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { toastNotify } from '../utils/ToastNotify';

export function useRequest<T, G>(
    callback: (config: G) => Promise<AxiosResponse<T, G>>,
    args: G,
    tag: string,
    toastToggle = false
) {
    const { data, isError, isLoading } = useQuery(tag, async () => {
        try {
            const data = await callback(args);
            if (toastToggle) {
                toastNotify(data.status);
            }
            return data.data;
        } catch (err) {
            if (toastToggle) {
                if (axios.isAxiosError(err)) {
                    toastNotify(err.request.status);
                } else {
                    toastNotify();
                }
            }
            return true;
        }
    });

    return { data, isError, isLoading };
}
