import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { queryClient } from '../..';
import { UserSwipe, UserSwipeType } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useSwipe = () => {
    return useMutation<
        UserSwipe,
        AxiosError,
        { id: string; status: UserSwipeType }
    >(async (v) => (await AuthService.postSwipe(v.id, v.status)).data, {
        onSuccess: () => queryClient.invalidateQueries('feed')
    });
};
