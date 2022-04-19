import { MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../routes/Routes';

type NavItem = {
    src: string;
    label: string;
    to: string;
};

const NAV_ITEMS = [
    {
        src: 'home',
        label: 'Home',
        to: ROUTES.HOME
    },
    {
        src: 'profile',
        label: 'Profile',
        to: `${ROUTES.PROFILE}/username`
    },
    {
        src: 'feed',
        label: 'Feed',
        to: ROUTES.FEED
    },
    {
        src: 'chat',
        label: 'Chat',
        to: `${ROUTES.CHAT}/id`
    },
    {
        src: 'post',
        label: 'Post',
        to: ROUTES.POST
    },
    {
        src: 'search',
        label: 'Search',
        to: ROUTES.SEARCH
    }
];

export const Navigation = () => {
    return (
        <>
            {NAV_ITEMS.map((navItem: NavItem) => (
                <MenuItem key={navItem.src}>
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