import { Box, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

import { POSTS_PAGE_SIZE, usePosts } from '../Api/EndPoints/usePosts';
import { PostCard } from '../components/PostCard';

export const Posts = () => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const posts = usePosts(page - 1);

    useEffect(() => {
        if (!posts.data) return;

        if (posts.data.length < POSTS_PAGE_SIZE) setPages(page);
        if (posts.data.length === POSTS_PAGE_SIZE)
            setPages((pages) => Math.max(pages, page + 1));
    }, [posts.data, page]);

    if (posts.isLoading || !posts.data) return null;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '440px'
            }}
        >
            {posts.data.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            <Pagination
                count={pages}
                page={page}
                size='large'
                color='secondary'
                onChange={(_, page) => setPage(page)}
            />
        </Box>
    );
};
