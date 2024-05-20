import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import useStoreGameQuery from "../hooks/useGameQuery.ts";

export default function OrderBy() {
    const {setSortOrder, gameQuery} = useStoreGameQuery()

    const typesOfOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: '-rating', label: 'Average Rating'},
        {value: 'name', label: 'By Name'},
        {value: '-metacritic', label: 'Popularity'},
    ]

    const handleChange = (event: SelectChangeEvent) => {
        setSortOrder(event.target.value);
    };

    return (
        <Box sx={{minWidth: 140}}>
            <FormControl fullWidth size={'small'}>
                <InputLabel id="demo-simple-select-label">Sort Games</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gameQuery.order || ''}
                    label="Age"
                    onChange={handleChange}
                >
                    {typesOfOrders.map((el, index) => <MenuItem key={index} value={el.value}>{el.label}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}