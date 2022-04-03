import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import { Router } from './Router';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6C56F9',
            light: '#B2A7FC',
            dark: '#3415F7'
        },
        background: {
            default: '#1A1B22'
        }
    }
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
};
