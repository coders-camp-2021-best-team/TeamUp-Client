import { useOurMedia } from '../../hooks';
import { DesktopProfile } from './desktop';
import { MobileProfile } from './mobile';

export const UserProfile = () => {
    const isPhoneSize = useOurMedia();
    return <>{isPhoneSize ? <MobileProfile /> : <DesktopProfile />}</>;
};
