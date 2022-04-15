import { useUser } from '../../Api/EndPoints/useUser';

export const Profile = () => {
    const user = useUser();

    return (
        <>
            <div>Profile</div>
            <pre>
                <code>{JSON.stringify(user, null, 4)}</code>
            </pre>
            <button onClick={() => user.refetch()}>Refetch</button>
        </>
    );
};
