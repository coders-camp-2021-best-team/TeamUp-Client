import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../routes/Routes';

export const Header = () => {
    const id = 1;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h5'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        TeamUp
                    </Typography>
                    <div>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}
                            id='basic-button'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button'
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <NavLink to={ROUTES.HOME}>Home</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={`${ROUTES.PROFILE}/${id}`}>
                                    Profile
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={ROUTES.FEED}>Feed</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={`${ROUTES.CHAT}/${id}`}>
                                    Chat
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={ROUTES.POST}>Post</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={ROUTES.SEARCH}>Search</NavLink>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
// <ul>
//     <li>
//         <NavLink to={ROUTES.LOGIN}>Login</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.REGISTER}>Register</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.HOME}>Home</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.FEED}>Feed</NavLink>
//     </li>
//     <li>
//         <NavLink to={`${ROUTES.PROFILE}/${id}`}>Profile</NavLink>
//     </li>
//     <li>
//         <NavLink to={`${ROUTES.CHAT}/${id}`}>Chat</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.SEARCH}>Search</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.POST}>Post</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.RESET_PASSWORD}>Reset Password</NavLink>
//     </li>
//     <li>
//         <NavLink to={ROUTES.CONFIRMATION_EMAIL}>
//             Confirmation Email
//         </NavLink>
//     </li>
// </ul>
//     );
// };
