import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import usePlatform from "../hooks/usePlatform.tsx";
import useGameQuery from "../hooks/useGameQuery.ts";


export default function PlatformSelector() {
    const { data, error } = usePlatform();
    const {setPlatformId, gameQuery} = useGameQuery()

    const handleChange = (event: SelectChangeEvent) => {
        setPlatformId(parseInt(event.target.value))
    };

    return (
        <FormControl sx={{ mb: 1.5, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Platform</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Platform"
                onChange={handleChange}
                value={gameQuery.parent_platforms?.toString() || ''}
            >
                {error && <MenuItem>{error.message}</MenuItem>}
                {data?.results.map(el => (
                    <MenuItem key={el.id} value={el.id}>
                        {el.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
