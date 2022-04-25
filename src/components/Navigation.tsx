import { MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../routes/Routes';

const NAV_ITEMS = [
    {
        label: 'Home',
        to: ROUTES.HOME
    },
    {
        label: 'Profile',
        to: `${ROUTES.PROFILE}/username`
    },
    {
        label: 'Feed',
        to: ROUTES.FEED
    },
    {
        label: 'Chat',
        to: ROUTES.CHAT
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
