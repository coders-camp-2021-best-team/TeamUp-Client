import {
    Box,
    Paper,
    TableBody,
    TableContainer,
    Typography
} from '@mui/material';

import { useChatRooms } from '../../Api/EndPoints/useChatRooms';
import { useMatch } from '../../Api/EndPoints/useMatch';
import { ChatRoomEntry } from '../../components/ChatRoomEntry';

export const ChatSelector = () => {
    const match = useMatch();
    const rooms = useChatRooms();

    if (rooms.isLoading || match.isLoading || !rooms.data) return null;

    return (
        <Box>
            {match.data ? <Typography>New Match Found!</Typography> : null}
            <TableContainer component={Paper}>
                <TableBody>
                    {rooms.data.map((room) => (
                        <ChatRoomEntry key={room.id} chat={room} />
                    ))}
                </TableBody>
            </TableContainer>
        </Box>
    );
};
