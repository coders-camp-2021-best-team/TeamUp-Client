import { MenuItem } from '@mui/material';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

type NAV_ITEM = {
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
        to: ROUTES.PROFILE // (id: string) => `${ROUTES.PROFILE}/${id}`
    },
    {
        src: 'feed',
        label: 'Feed',
        to: ROUTES.FEED
    },
    {
        src: 'chat',
        label: 'Chat',
        to: ROUTES.CHAT // (id: string) => `${ROUTES.CHAT}/${id}`
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {NAV_ITEMS.map((navItem: NAV_ITEM) => (
                <MenuItem key={navItem.src} onClick={handleClose}>
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
