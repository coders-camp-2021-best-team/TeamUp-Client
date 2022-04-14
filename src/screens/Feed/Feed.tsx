import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { Box, Box as Image, Fab, Typography } from '@mui/material';

import { getAge } from '../../utils';
import { style } from './Feed.style';
import { useFeedQuery } from './useFeed';

export const Feed = () => {
    const { data, isLoading } = useFeedQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Box sx={style.imageBox}>
                <Image
                    component='img'
                    alt='Profile Picture'
                    src={data?.avatar}
                    width='100%'
                    maxWidth='425px'
                    padding='1rem'
                    height='60vh'
                    sx={style.imageStyle}
                />
                <Fab
                    onClick={() => {
                        /**
                         * go to profile screen
                         */
                        console.log(data?.id);
                    }}
                    color='warning'
                    aria-label='info'
                    sx={style.profileButton}
                >
                    <PermIdentityRoundedIcon sx={{ fontSize: '32px' }} />
                </Fab>
            </Box>
            <Typography
                variant='h5'
                sx={{ flexGrow: 1 }}
                margin='2vw 5.5vw'
                color='white'
            >
                {data?.first_name} {data?.last_name} -{' '}
                {data?.birthdate ? getAge(data.birthdate) : ''}
            </Typography>
            <Box sx={style.tagsBox}>
                {data?.skills.map(({ id, level: { game } }) => (
                    <Box key={id} sx={style.tagBox}>
                        <Typography variant='body2'>{game.name}</Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={style.swipeBox}>
                <Fab
                    color='error'
                    aria-label='cancel'
                    onClick={() => {
                        /**
                         *
                         * some BE mutation that use data.id
                         */
                        console.log(data?.id);
                    }}
                >
                    <CloseRoundedIcon sx={style.swipeButton} />
                </Fab>
                <Fab
                    color='success'
                    aria-label='approve'
                    onClick={() => {
                        /**
                         *
                         * approve and go to next id
                         */
                        console.log(data?.id);
                    }}
                >
                    <SportsEsportsRoundedIcon sx={style.swipeButton} />
                </Fab>
            </Box>
        </>
    );
};
