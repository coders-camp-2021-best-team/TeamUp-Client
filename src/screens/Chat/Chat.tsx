import { useParams } from 'react-router-dom';

export const Chat = () => {
    const { id } = useParams();

    return <div>{id}</div>;
};
