import { useQuery } from 'react-query';

import { User } from '../../../src/utils/types/apiTypes';
import { request } from '../../Axios/Axios';
import { toastNotify } from '../../utils/ToastNotify';

export const useFeedQuery = () => {
    const getFeed = () => request.get<User>('/feed').then((resp) => resp.data);

    return useQuery(['user'], getFeed, {
        onError: () => toastNotify(undefined, 'Uuuup something went wrong!')
    });
};
