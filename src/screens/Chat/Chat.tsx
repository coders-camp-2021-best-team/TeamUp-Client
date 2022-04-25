import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useSocket } from '../../Api/SocketIO';
import { ChatRoom, Message } from '../../utils/types/apiTypes';

export const Chat = () => {
    const { id } = useParams();
    const socket = useSocket();
    const [messages, setMessages] = useState<Message[]>([]);
    const { register, handleSubmit, reset } = useForm<{ message: string }>({
        defaultValues: { message: '' }
    });

    console.log(messages);

    useEffect(() => {
        if (!socket) return;

        socket.on('room.details', (room: ChatRoom) => {
            setMessages(room.messages || []);
        });

        socket.on('message', (msg: Message) => {
            if (msg.chatroom.id === id) {
                setMessages((old) => [...old, msg]);
            }
        });

        socket.emit('room.join', { roomID: id }, console.log);

        return () => {
            socket.emit('room.leave', { roomID: id }, console.log);
            socket.off('message');
            socket.off('room.details');
        };
    }, [id, socket]);

    return (
        <Box>
            {messages.map((msg) => (
                <Typography key={msg.id}>
                    {msg.author.username}: {msg.content}
                </Typography>
            ))}

            <form>
                <TextField
                    placeholder='Type your message'
                    required
                    {...register('message', { required: true })}
                />
                <Button
                    type='submit'
                    onClick={handleSubmit(({ message }) => {
                        socket?.emit(
                            'message.send',
                            {
                                roomID: id,
                                content: message
                            },
                            console.log
                        );

                        reset({ message: '' });
                    })}
                />
            </form>
        </Box>
    );
};
