import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {InputAdornment,} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ChangeEvent} from "react";
import CloseIcon from '@mui/icons-material/Close';

interface  Props {
    setSearchText: (event: string) => void,
    searchText: string
}
export default function Search({setSearchText, searchText}: Props) {
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSearchText(event.target.value)
    const  handleClick = ()=> {
        setSearchText('')
    }
    
    return (
        <Stack spacing={2} sx={{ width: {xs: '75%', md: '50%', lg: '60%', sm: '70%'} }}>
            <TextField onChange={(event)=> handleChange(event)}
                       value={searchText}
                       variant={'outlined'}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment sx={{cursor: 'pointer'}} position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                           endAdornment: searchText && <InputAdornment sx={{cursor: 'pointer'}} onClick={handleClick} position="start">
                               <CloseIcon/>
                           </InputAdornment>
                       }}
                       label="Search"
            />
        </Stack>
    );
}
