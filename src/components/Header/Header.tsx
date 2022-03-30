import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

export const Header = () => {
    const id = 1;
    return (
        <ul>
            <li>
                <NavLink to={ROUTES.LOGIN}>Login</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.REGISTER}>Register</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.FEED}>Feed</NavLink>
            </li>
            <li>
                <NavLink to={`${ROUTES.PROFILE}/${id}`}>Profile</NavLink>
            </li>
            <li>
                <NavLink to={`${ROUTES.CHAT}/${id}`}>Chat</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.SEARCH}>Search</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.POST}>Post</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.RESET_PASSWORD}>Reset Password</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.CONFIRMATION_EMAIL}>
                    Confirmation Email
                </NavLink>
            </li>
        </ul>
    );
};
