import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Chip, Link, Stack} from '@mui/material';
import useGameDetails from "../hooks/useGameDetails.tsx";
import removeText from "../services/remove-text.ts";
import {useParams} from "react-router-dom";
import {GameDetails} from "../entities/GameDetailsInterface.ts";
import CircularProgress from "@mui/material/CircularProgress";
import ExpandButtonText from "./ExpandButton.tsx";
import Trailer from "./Trailer.tsx";
import GamesImageList from "./GamesImageList.tsx";

function GameDetailsInfo() {
    const {slug } = useParams()
    const {data= {} as GameDetails, isLoading} = useGameDetails(slug)
    const editedRawText = removeText(data.description_raw)

    if (isLoading) return <CircularProgress />
    console.log(editedRawText?.length)

    return <>
        <Box maxWidth={'90%'} display={'flex'} flexDirection={'column'}>
                <Box sx={{maxWidth: '100%', mb: '2rem'}} component="img"
                     src={data?.background_image || 'src/assets/WebStorm.jpeg'}></Box>
                <Typography id="modal-modal-title" fontWeight="bold" variant="h3" component="h2" mb={'1rem'}>
                    {data?.name}
                </Typography>
                <ExpandButtonText text={editedRawText}/>
                <Stack display={'flex'} direction={'row'} gap={3}>
                    <Stack flex={'true'} direction={'column'} gap={3} mb={'1rem'}>
                        <Box>
                            <Typography color={'#585858'}
                                        variant={'subtitle1'}>{data.publishers && data.publishers?.length === 1 ? 'Publisher' : 'Publishers'}</Typography>
                            <Stack flex={'true'} direction={'row'}
                                   gap={0.5} flexWrap={"wrap"}>{data.publishers && data.publishers.map((el, index) =>
                                <Typography
                                    variant={'subtitle2'}
                                    key={index}>{el.name}{index !== data.publishers.length - 1 && ','}</Typography>)}</Stack>
                        </Box>
                        <Box>
                            <Typography color={'#585858'} variant={'subtitle1'}>Genres</Typography>
                            <Stack flex={'true'} direction={'row'} gap={0.5} flexWrap={"wrap"}>
                                {data.genres && data.genres.map((el, index) =>
                                    <Typography key={index}
                                                variant={'subtitle2'}>{el.name}{index !== data.genres.length - 1 && ','}</Typography>)}
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack display={"flex"} direction={'column'} mb={'3rem'} gap={3}>
                        <Box>
                            <Typography color={'#585858'} variant={'subtitle1'}>Developers</Typography>
                            <Stack flex={'true'} direction={'row'} gap={0.5} flexWrap={"wrap"}>
                                {data.developers && data.developers.map((el, index) =>
                                    <Typography key={index}
                                                variant={'subtitle2'}>{el.name}{index !== data.developers.length - 1 && ','}</Typography>)}
                            </Stack>
                        </Box>
                        <Box>
                            <Typography color={'#585858'} variant={'subtitle1'}>Platforms</Typography>
                            <Stack flex={'true'} direction={'row'} gap={0.5} flexWrap={"wrap"}>
                                {data.platforms && data.platforms.map((el, index) =>
                                    <Typography key={index}
                                                variant={'subtitle2'}>{el.platform.name}{index !== data.platforms.length - 1 && ','}</Typography>)}
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography fontWeight={'bold'} mb={'1rem'} variant={'h4'}>Tags</Typography>
                    <Stack mb={'3rem'} display={'flex'} flexWrap={'wrap'} flexBasis={1} direction={'row'} gap={1}>
                        {data.tags && data?.tags.map((el, index) =>
                            <Chip sx={{
                                '&:hover': {
                                    // your hover styles here
                                    backgroundColor: 'lightgrey', // for example
                                },
                            }} key={index} color={'primary'}
                                  label={el.name}></Chip>)}
                    </Stack>
                    <Stack display={'flex'}>
                        <Typography fontWeight={'bold'} mb={'1rem'} variant={'h4'}>Available In</Typography>
                        <Stack mb={'3rem'}>
                            {data.stores && data.stores.map((el, index) =>
                                <Link sx={{
                                    '&:hover': {
                                        // your hover styles here
                                        color: 'lightgrey', // for example
                                    },
                                }} key={index} mb={'0.5'}
                                      variant={'h6'}
                                      href={'https://' + el.store.domain}>{el.store.name}</Link>)}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <GamesImageList id={data.id}></GamesImageList>
                </Stack>
            <Box maxWidth={{xs: '100%', sm: '80%', md: '70%'}}>
                <Trailer></Trailer>
            </Box>
        </Box>
    </>
}

export default GameDetailsInfo