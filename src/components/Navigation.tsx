import { MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import { NavLink, useNavigate } from 'react-router-dom';

import { useLogout } from '../Api/EndPoints/useLogout';
import { ROUTES } from '../routes/Routes';

const NAV_ITEMS = [
    {
        label: 'Home',
        to: ROUTES.FEED
    },
    {
        label: 'Profile',
        to: `${ROUTES.PROFILE}/username`
    },
    {
        label: 'Chat',
        to: `${ROUTES.CHAT}/id`
    },
    {
        label: 'Posts',
        to: ROUTES.POSTS
    },
    {
        label: 'Search',
        to: ROUTES.SEARCH
    }
];

export const Navigation = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const handleLogoutClick = () => {
        logout.mutateAsync().then(() => navigate(ROUTES.HOME));
    };

    return (
        <>
            {NAV_ITEMS.map((navItem, idx) => (
                <MenuItem key={idx}>
                    <Link
                        underline='hover'
                        variant='body1'
                        color={'#000'}
                        component={NavLink}
                        to={navItem.to}
                    >
                        {navItem.label}
                    </Link>
                </MenuItem>
            ))}
            <MenuItem>
                <Link
                    underline='hover'
                    variant='body1'
                    color={'#000'}
                    component='button'
                    onClick={handleLogoutClick}
                >
                    Logout
                </Link>
            </MenuItem>
        </>
    );
};
