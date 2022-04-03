import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        phone: true;
        tablet: true;
        tabletLandscape: true;
        laptop: true;
        desktop: true;
        desktopWide: true;
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6C56F9',
            light: '#B2A7FC',
            dark: '#3415F7'
        },
        background: {
            default: '#1A1B22'
        }
    },
    breakpoints: {
        values: {
            phone: 483,
            tablet: 640,
            tabletLandscape: 900,
            laptop: 1024,
            desktop: 1501,
            desktopWide: 1800
        }
    }
});
