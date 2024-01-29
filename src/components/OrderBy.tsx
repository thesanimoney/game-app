import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {GameQuery} from "../App.tsx";

interface Props {
    setOrder: (order: string) => void
    selectedOrder: GameQuery
}

export default function OrderBy({setOrder, selectedOrder}: Props) {
    const typesOfOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: '-rating', label: 'Average Rating'},
        {value: 'name', label: 'By Name'},
        {value: '-metacritic', label: 'Popularity'},
    ]

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value);
    };

    return (
        <Box sx={{minWidth: 140}}>
            <FormControl fullWidth size={'small'}>
                <InputLabel id="demo-simple-select-label">Sort Games</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedOrder.order || ''}
                    label="Age"
                    onChange={handleChange}
                >
                    {typesOfOrders.map((el, index) => <MenuItem key={index} value={el.value}>{el.label}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}