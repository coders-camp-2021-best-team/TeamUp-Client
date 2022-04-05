import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

export const Home = () => {
    return (
        <>
            <NavLink to={ROUTES.FEED}>FEED</NavLink>
            <div>Home</div>
        </>
    );
};
