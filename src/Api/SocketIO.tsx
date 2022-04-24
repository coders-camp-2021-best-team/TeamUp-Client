import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';
import { connect, Socket } from 'socket.io-client';

import { useWebsocketJWT } from './EndPoints/useWebsocketJWT';

export const SocketContext = createContext<Socket | undefined>(undefined);

export const SocketContextProvider = ({
    children
}: {
    children: ReactNode;
}) => {
    const jwt = useWebsocketJWT();
    const [socket, setSocket] = useState<Socket>();
    const [token, setToken] = useState<string>();

    useEffect(() => {
        setToken(jwt.data);
    }, [jwt]);

    useEffect(() => {
        setSocket(
            connect(process.env.REACT_APP_API_URL || '', {
                auth: { token },
                path: '/api/socket.io'
            })
        );

        return () => {
            if (!socket) return;

            socket.disconnect();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
