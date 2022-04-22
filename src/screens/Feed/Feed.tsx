import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { Box, Fab, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useFeed } from '../../Api/EndPoints/useFeed';
import { useSwipe } from '../../Api/EndPoints/useSwipe';
import { ROUTES } from '../../routes/Routes';
import { getAge } from '../../utils';
import { CDN } from '../../utils/CDN';
import { UserSwipeType } from '../../utils/types/apiTypes';
import { style } from './Feed.style';

export const Feed = () => {
    const navigate = useNavigate();
    const feed = useFeed();
    const swipe = useSwipe();

    if (feed.isLoading || !feed.data || feed.data.recommendedUser === null)
        return null;

    return (
        <>
            <Box sx={style.imageBox}>
                <Box
                    component='img'
                    alt='Profile Picture'
                    src={CDN(feed.data.recommendedUser.avatar || '')}
                    width='100%'
                    maxWidth='425px'
                    height='450px'
                    sx={style.imageStyle}
                />
                <Fab
                    onClick={() =>
                        navigate(
                            `${ROUTES.PROFILE}/${feed.data.recommendedUser?.id}`
                        )
                    }
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
                margin='40px 25px 10px'
                color='white'
            >
                {feed.data.recommendedUser.first_name}{' '}
                {feed.data.recommendedUser.last_name} -{' '}
                {getAge(feed.data.recommendedUser.birthdate)}
            </Typography>
            {/* <Box sx={style.tagsBox}>
                {feed.data.recommendedUser.skills.map(
                    ({ id, level: { game } }) => (
                        <Box key={id} sx={style.tagBox}>
                            <Typography variant='body2'>{game.name}</Typography>
                        </Box>
                    )
                )}
            </Box> */}
            <Box sx={style.swipeBox}>
                <Fab
                    color='error'
                    aria-label='cancel'
                    onClick={() =>
                        swipe.mutate({
                            id: feed.data.recommendedUser?.id || '',
                            status: UserSwipeType.DISLIKE
                        })
                    }
                >
                    <CloseRoundedIcon sx={style.swipeButton} />
                </Fab>
                <Fab
                    color='success'
                    aria-label='approve'
                    onClick={() =>
                        swipe.mutate({
                            id: feed.data.recommendedUser?.id || '',
                            status: UserSwipeType.LIKE
                        })
                    }
                >
                    <SportsEsportsRoundedIcon sx={style.swipeButton} />
                </Fab>
            </Box>
        </>
    );
};
