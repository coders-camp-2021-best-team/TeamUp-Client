import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { theme } from './config/theme';
import { Router } from './Router';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
};
