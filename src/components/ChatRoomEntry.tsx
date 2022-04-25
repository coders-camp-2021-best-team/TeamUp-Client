import { TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../Api/EndPoints/useUser';
import { ROUTES } from '../routes/Routes';
import { AVATAR } from '../utils/avatar';
import { ChatRoom } from '../utils/types/apiTypes';

export const ChatRoomEntry = ({ chat }: { chat: ChatRoom }) => {
    const { data: user } = useUser();
    const navigate = useNavigate();

    if (!user) return null;

    const recipient =
        chat.recipient1.id === user?.id ? chat.recipient2 : chat.recipient1;

    return (
        <Box>
            <TableRow
                key={user.id}
                onClick={() => navigate(`${ROUTES.CHAT}/${chat.id}`)}
            >
                <TableCell>
                    <Box
                        component='img'
                        src={AVATAR(recipient.avatar)}
                        width='90px'
                    />
                </TableCell>
                <TableCell>
                    {recipient.first_name} {recipient.last_name} -{' '}
                    {recipient.username}
                </TableCell>
            </TableRow>
        </Box>
    );
};
