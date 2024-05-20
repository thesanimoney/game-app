import {Typography} from "@mui/material";
import useGenres from "../hooks/useGenres.tsx";
import usePlatform from "../hooks/usePlatform.tsx";
import useGameQuery from "../hooks/useGameQuery.ts";

function DynamicText() {
    const {gameQuery} = useGameQuery()

    const {data: genres} = useGenres()
    const {data: platforms} = usePlatform()

    const selectedPlatform = platforms?.results.find(el => gameQuery.parent_platforms === el.id)
    const selectedGenre = genres?.results.find(el => gameQuery.genresId === el.id)

    return <>
        <Typography sx={{fontWeight: 'bolder'}} variant={'h2'}>
            {selectedPlatform ? selectedPlatform.name : ''}  {selectedGenre ? selectedGenre.name : ''} Games</Typography>
    </>
}

export default DynamicText;