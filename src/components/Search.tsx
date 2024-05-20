import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {InputAdornment,} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ChangeEvent} from "react";
import CloseIcon from '@mui/icons-material/Close';
import useStoreGameQuery from "../hooks/useGameQuery.ts";
import {useNavigate} from "react-router-dom";

export default function Search() {
    const {setSearchText, gameQuery} = useStoreGameQuery()
    const navigate = useNavigate()

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText(event.target.value)
        return navigate('')
    }
    const  handleClick = ()=> {
        setSearchText('');
    }
    
    return (
        <Stack spacing={2} sx={{ width: {xs: '75%', md: '50%', lg: '60%', sm: '70%'} }}>
            <TextField onChange={(event)=> handleChange(event)}
                       value={gameQuery.search || ''}
                       variant={'outlined'}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment sx={{cursor: 'pointer'}} position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                           endAdornment: gameQuery.search && <InputAdornment sx={{cursor: 'pointer'}} onClick={handleClick} position="start">
                               <CloseIcon/>
                           </InputAdornment>
                       }}
                       label="Search"
            />
        </Stack>
    );
}
