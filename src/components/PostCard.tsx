import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography
} from '@mui/material';
import { useState } from 'react';

import { usePostAttachments } from '../Api/EndPoints/usePostAttachments';
import { usePostVotes } from '../Api/EndPoints/usePostVotes';
import { CDN } from '../utils/CDN';
import { Post, PostVoteType } from '../utils/types/apiTypes';

export const PostCard = ({
    post,
    full = false
}: {
    post: Post;
    full?: boolean;
}) => {
    const [isFull, setFull] = useState(full);
    const attachments = usePostAttachments(post.id);
    const votes = usePostVotes(post.id);

    if (
        attachments.isLoading ||
        votes.isLoading ||
        !attachments.data ||
        !votes.data
    )
        return null;

    return (
        <Card style={{ margin: '20px' }} onClick={() => setFull((a) => !a)}>
            <CardHeader
                avatar={
                    <>
                        <ArrowUpward
                            color={
                                votes.data.me?.type === PostVoteType.UPVOTE
                                    ? 'success'
                                    : 'primary'
                            }
                        />
                        {votes.data.upvotes - votes.data.downvotes}
                        <ArrowDownward
                            color={
                                votes.data.me?.type === PostVoteType.DOWNVOTE
                                    ? 'error'
                                    : 'primary'
                            }
                        />
                    </>
                }
                title={post.title}
                subheader={new Date(post.createdOn).toLocaleDateString()}
            ></CardHeader>
            <CardContent>
                <Typography variant='h5'>{post.title}</Typography>
            </CardContent>
            {attachments.data.length ? (
                <CardMedia
                    component='img'
                    image={CDN(attachments.data[0].key)}
                    height='450'
                />
            ) : null}
            {isFull ? (
                <CardContent>
                    <Typography variant='subtitle1'>{post.body}</Typography>
                </CardContent>
            ) : null}
        </Card>
    );
};
