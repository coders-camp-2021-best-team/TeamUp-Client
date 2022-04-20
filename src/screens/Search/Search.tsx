import SearchIcon from '@mui/icons-material/Search';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import { Fab, TextField } from '@mui/material';
import { Box } from '@mui/system';

export const Search = () => {
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
                    label='Search'
                    id='Search'
                    sx={{ backgroundColor: '#B2A7FC' }}
                    InputLabelProps={{
                        style: { color: '#fff' }
                    }}
                />
            </Box>
            <Fab
                onClick={() => {
                    // filters to choose from
                    console.log('click');
                }}
                aria-label='filters'
                sx={{
                    width: '40px',
                    height: '37.71px',
                    marginLeft: '10px',
                    backgroundColor: '#3415F7',
                    '&:hover': {
                        backgroundColor: '#6C56F9'
                    }
                }}
            >
                <SortRoundedIcon sx={{ fontSize: '32px', color: '#fff' }} />
            </Fab>
        </>
    );
};
