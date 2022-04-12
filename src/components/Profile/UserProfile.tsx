import { useOurMedia } from '../../hooks';
import { DesktopProfile } from './desktop';
import { MobileProfile } from './mobile';

//TODO connect screen to API
export const UserProfile = () => {
    const isPhoneSize = useOurMedia();
    return <>{isPhoneSize ? <MobileProfile /> : <DesktopProfile />}</>;
};
