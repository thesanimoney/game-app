import {Typography} from "@mui/material";
import {Genre} from "../hooks/useGenres.tsx";
import {Platform} from "../hooks/useGames.tsx";

interface Props {
    selectedGenre: Genre,
    selectedPlatform: Platform
}

function DynamicText({selectedGenre, selectedPlatform}: Props) {
    console.log(selectedPlatform)

    return <>
        <Typography sx={{fontWeight: 'bolder'}} variant={'h4'}>
            {selectedPlatform ? selectedPlatform.name : ''}  {selectedGenre ? selectedGenre.name : ''} Games</Typography>
    </>
}

export default DynamicText;