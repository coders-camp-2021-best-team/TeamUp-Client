import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { useSocket } from '../SocketIO';

export enum UserActivityStatus {
    ONLINE = 'ONLINE',
    IDLE = 'IDLE',
    DO_NOT_DISTURB = 'DO_NOT_DISTURB',
    OFFLINE = 'OFFLINE'
}

export const useSetUserStatus = () => {
    const socket = useSocket();

    return useMutation<unknown, AxiosError, UserActivityStatus>(
        'current_user_status',
        async (status) => {
            socket?.emit('user.status.send', { activity_status: status });
        }
    );
};
