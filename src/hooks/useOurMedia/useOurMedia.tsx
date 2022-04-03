import { useMediaQuery } from '@mui/material';

import { theme } from './theme';

type Breakpoints =
    | 'phone'
    | 'tablet'
    | 'tabletLandscape'
    | 'laptop'
    | 'desktop'
    | 'desktopWide';

type MinOrMax = 'min' | 'max';

export const useOurMedia = (
    breakpoint: Breakpoints = 'phone',
    minOrMax: MinOrMax = 'max'
) => {
    let mediaQuery: string;
    if (minOrMax === 'min') {
        mediaQuery = theme.breakpoints.up(`${breakpoint}`);
    } else {
        mediaQuery = theme.breakpoints.down(`${breakpoint}`);
    }
    const matches = useMediaQuery(mediaQuery);

    return matches;
};
