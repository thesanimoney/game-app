import {Chip} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface Props {
    metacritic: number
}

function ScoreBadge({metacritic}: Props) {
    const color = metacritic > 80 ? 'success' : metacritic > 60 ? 'warning' : 'error'

    return <>
        <Chip sx={{borderRadius: '15px'}} label={metacritic} color={color} icon={<StarIcon color={color}/>}/>
    </>
}

export default ScoreBadge;