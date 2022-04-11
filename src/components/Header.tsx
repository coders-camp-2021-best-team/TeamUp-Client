import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import { Navigation } from '.';

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
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

                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2, background: 'rgba(0,0,0,0.20)' }}
                        id='basic-button'
                        aria-controls={anchorEl ? 'basic-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={anchorEl ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={!!anchorEl}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}
                    >
                        <Navigation />
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
