import { useChatRooms } from '../../Api/EndPoints/useChatRooms';

export const ChatSelector = () => {
    const rooms = useChatRooms();

    if (rooms.isLoading || !rooms.data) return null;

    return (
        <div>
            {rooms.data.map((room) => (
                <div key={room.id}>
                    <pre>
                        <code>{JSON.stringify(room, null, 4)}</code>
                    </pre>
                </div>
            ))}
        </div>
    );
};
