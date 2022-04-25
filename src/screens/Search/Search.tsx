import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSearch } from '../../Api/EndPoints/useSearch';
import useDebounce from '../../hooks/useDebounce';
import { ROUTES } from '../../routes/Routes';
import { AVATAR } from '../../utils/avatar';

export const Search = () => {
    const [rawQuery, setRawQuery] = useState<string>();
    const query = useDebounce(rawQuery, 500);

    const search = useSearch(query);
    const navigate = useNavigate();

    if (search.isLoading || !search.data) return null;

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
                    onChange={(e) => setRawQuery(e.target.value)}
                    label='Search'
                    id='Search'
                    sx={{ backgroundColor: '#B2A7FC' }}
                    InputLabelProps={{
                        style: { color: '#fff' }
                    }}
                />
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Birthdate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {search.data.map((user) => (
                            <TableRow
                                key={user.id}
                                onClick={() =>
                                    navigate(
                                        `${ROUTES.PROFILE}/${user.username}`
                                    )
                                }
                            >
                                <TableCell>
                                    <Box
                                        component='img'
                                        src={AVATAR(user.avatar)}
                                        width='90px'
                                    />
                                </TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>
                                    {user.first_name} {user.last_name}
                                </TableCell>
                                <TableCell>
                                    {new Date(
                                        user.birthdate
                                    ).toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
