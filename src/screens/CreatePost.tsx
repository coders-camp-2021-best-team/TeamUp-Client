import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useCreatePost } from '../Api/EndPoints/useCreatePost';
import { useUploadAttachment } from '../Api/EndPoints/useUploadAttachment';
import { theme } from '../config/theme';
import { ROUTES } from '../routes/Routes';
import { CreatePost as CreatePostDTO } from '../utils/types/apiTypes';

export const CreatePost = () => {
    const { handleSubmit, register } = useForm<
        CreatePostDTO & { files: FileList }
    >();
    const createPost = useCreatePost();
    const uploadAtt = useUploadAttachment();
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Box
                sx={{
                    margin: '120px 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '90%',
                    [theme.breakpoints.up('tablet')]: {
                        width: '383px'
                    }
                }}
            >
                <Typography
                    component='h1'
                    variant='h4'
                    color='common.white'
                    sx={{
                        [theme.breakpoints.down('tablet')]: {
                            fontSize: '24px'
                        }
                    }}
                >
                    Create New Post
                </Typography>

                <form
                    onSubmit={handleSubmit((data) =>
                        createPost
                            .mutateAsync({ ...data, categories: [] })
                            .then((post) => {
                                console.log(data);
                                Promise.all(
                                    Array.from(data.files).map(
                                        async (file) =>
                                            await uploadAtt.mutateAsync({
                                                id: post.id,
                                                file
                                            })
                                    )
                                ).then(() => navigate(ROUTES.POSTS));
                            })
                    )}
                >
                    <TextField
                        {...register('title')}
                        variant='outlined'
                        required
                        label='Title'
                    />

                    <TextField
                        {...register('body')}
                        variant='outlined'
                        label='Body'
                    />

                    <input
                        type='file'
                        multiple
                        accept='image/*'
                        {...register('files')}
                    />

                    <Button
                        variant='contained'
                        sx={{
                            width: '100%'
                        }}
                        type='submit'
                    >
                        Create Post
                    </Button>
                </form>
            </Box>
        </div>
    );
};
