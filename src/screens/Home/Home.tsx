import { NavLink } from 'react-router-dom';

import { useOurMedia } from '../../hooks';
import { ROUTES } from '../../routes/Routes';

export const Home = () => {
    const phoneOnly = useOurMedia();
    const tabletSize = useOurMedia('tablet', 'min');
    return (
        <>
            <NavLink to={ROUTES.FEED}>FEED</NavLink>
            <div>Home</div>
            {phoneOnly && <p>Phone Size Max</p>}
            {tabletSize && <p>Tablet Size Min</p>}
        </>
    );
};
