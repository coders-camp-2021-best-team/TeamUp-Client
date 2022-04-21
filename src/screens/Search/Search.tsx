import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import temp from 'lodash';

const fetchSth = (searchPhrase: string) =>
    axios.get(`https://rickandmortyapi.com/api/episode/${searchPhrase}`);

export const Search = () => {
    const handleOnChange = temp.debounce(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const val = e.target.value;
            fetchSth(val).then((resp) => console.log(resp.data));
        },
        3000
    );

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <SearchIcon
                    sx={{
                        fontSize: '112px',
                        color: '#B2A7FC',
                        marginTop: '1rem'
                    }}
                />
            </Box>
            <Box
                sx={{
                    padding: '1rem 10px',
                    Width: '100%'
                }}
            >
                <TextField
                    fullWidth
                    onChange={handleOnChange}
                    label='Search'
                    id='Search'
                    sx={{ backgroundColor: '#B2A7FC' }}
                    InputLabelProps={{
                        style: { color: '#fff' }
                    }}
                />
            </Box>
        </>
    );
};
