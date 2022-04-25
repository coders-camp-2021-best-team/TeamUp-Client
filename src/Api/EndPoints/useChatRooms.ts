import { useQuery } from 'react-query';

import { ChatRoom } from '../../utils/types/apiTypes';
import { AuthService } from '../client/AuthService';

export const useChatRooms = () => {
    return useQuery<ChatRoom[]>(
        'chat_rooms',
        async () => (await AuthService.chatRooms()).data
    );
};
