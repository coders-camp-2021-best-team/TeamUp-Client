import { DesktopProfile, MobileProfile } from '../../components';
import { useOurMedia } from '../../hooks';

export const Profile = () => {
    const isPhoneSize = useOurMedia();
    return (
        <>
            <div>Profile</div>
            {isPhoneSize ? <MobileProfile /> : <DesktopProfile />}
        </>
    );
};
