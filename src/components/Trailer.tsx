import {useParams} from "react-router-dom";
import useGameMedia from "../hooks/useGameMedia.ts";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Trailer() {
    const {slug} = useParams()
    const {data} = useGameMedia(`${slug}/movies`)

    const firstVideo = data && data[0]?.data?.max
    return <>
    {data?.length === 0 ? null : <Box><Typography mb={'1rem'} fontWeight={'bold'} variant={'h4'}>Trailer</Typography>
        <video controls={true} muted={true} poster={data && data[0]?.preview} src={firstVideo} autoPlay={true} width={'100%'}></video></Box>}
        </>
}

export default Trailer;