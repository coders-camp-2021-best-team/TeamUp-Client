import { ThemeProvider } from '@emotion/react';

import { theme } from './config/theme';
import { Router } from './Router';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
};
