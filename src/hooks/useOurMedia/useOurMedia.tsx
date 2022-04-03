import { useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

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
    const mediaQuery = useMemo(() => {
        if (minOrMax === 'min') {
            return theme.breakpoints.up(breakpoint);
        } else {
            return theme.breakpoints.down(breakpoint);
        }
    }, [breakpoint, minOrMax]);
    const matches = useMediaQuery(mediaQuery);

    return matches;
};
