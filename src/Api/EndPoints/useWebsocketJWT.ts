import { useQuery } from 'react-query';

import { AuthService } from '../client/AuthService';

export const useWebsocketJWT = () => {
    return useQuery<string>(
        'websocket-jwt',
        async () => (await AuthService.getWebsocketJWT()).data
    );
};
