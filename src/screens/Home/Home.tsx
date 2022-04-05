import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';
import { Logger } from '../../utils/Logger';

export const Home = () => {
    return (
        <>
            <NavLink to={ROUTES.FEED}>FEED</NavLink>
            <div>Home</div>
        </>
    );
};
