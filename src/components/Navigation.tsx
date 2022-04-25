import { MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

import { useUser } from '../Api/EndPoints/useUser';
import { ROUTES } from '../routes/Routes';

export const Navigation = () => {
    const { data: user } = useUser();

    const NAV_ITEMS = [
        {
            label: 'Home',
            to: ROUTES.FEED
        },
        {
            label: 'Profile',
            to: `${ROUTES.PROFILE}/${user?.username}`
        },
        {
            label: 'Chats',
            to: ROUTES.CHAT
        },
        {
            label: 'Posts',
            to: ROUTES.POSTS
        },
        {
            label: 'Search',
            to: ROUTES.SEARCH
        },
        {
            label: 'Logout',
            to: ROUTES.LOGOUT
        }
    ];

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
        </>
    );
};
