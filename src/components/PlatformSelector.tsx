import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import usePlatform from "../hooks/usePlatform.tsx";
import { Platform } from "../hooks/useGames.tsx";

interface Props {
    setPlatform: (id: number, name: string) => void,
    selectedPlatform: Platform
}

export default function PlatformSelector({ setPlatform, selectedPlatform }: Props) {
    const { data, error } = usePlatform();

    const handleChange = (event: SelectChangeEvent) => {
        const selectedId = parseInt(event.target.value, 10);

        if (selectedId) {
            const selectedPlatform = data.find(el => el.id === selectedId);

            selectedPlatform && setPlatform(selectedPlatform.id, selectedPlatform.name);
        } else {
            // Handle the case when "All Platforms" is selected
            setPlatform(0, ''); // You can use 0 or any other value for the "All Platforms" option
        }
    };

    return (
        <FormControl sx={{ mb: 1.5, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Platform</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Platform"
                onChange={handleChange}
                value={selectedPlatform ? selectedPlatform?.id.toString(10) : ''}
            >
                {error && <MenuItem>{error.message}</MenuItem>}
                <MenuItem value={''}>All Platforms</MenuItem>
                {data.map(el => (
                    <MenuItem key={el.id} value={el.id}>
                        {el.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
