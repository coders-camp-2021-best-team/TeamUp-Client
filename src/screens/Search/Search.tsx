import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
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

    const columns: GridColDef[] = [
        { field: 'avatar', headerName: 'Avatar', width: 60 },
        { field: 'name', headerName: 'First and last name', width: 150 },
        { field: 'username', headerName: 'Username', width: 150 }
    ];

    const rows = [
        {
            id: 1,
            avatar: 'img',
            name: 'Jon Snow',
            username: 'Johny'
        },
        {
            id: 2,
            avatar: 'img',
            name: 'Dawid Kowalski',
            username: 'Mały Jaś'
        },
        {
            id: 3,
            avatar: 'img',
            name: 'Tom Nowak',
            username: 'Ktoś bez coś'
        },
        {
            id: 4,
            avatar: 'img',
            name: 'Mariusz Wiśniewski',
            username: 'Awwwwwxd'
        },
        {
            id: 5,
            avatar: 'img',
            name: 'Mariusz Wiśniewski',
            username: 'Awwwwwxd'
        },
        {
            id: 6,
            avatar: 'img',
            name: 'Mariusz Wiśniewski',
            username: 'Awwwwwxd'
        },
        {
            id: 7,
            avatar: 'img',
            name: 'Mariusz Wiśniewski',
            username: 'Awwwwwxd'
        }
    ];

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
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    sx={{
                        backgroundColor: '#B2A7FC',
                        margin: '0 10px'
                    }}
                />
            </div>
        </>
    );
};
