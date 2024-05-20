import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Typography, useMediaQuery} from "@mui/material";
import useGameScreenshots from "../hooks/useGameScreenshots.ts";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

interface Props {
    id: number
}

export default function GamesImageList({id}: Props) {
    const {data } = useGameScreenshots(`${id}/screenshots`)
    const matches = useMediaQuery('(min-width:600px)');


    return <>
        {data ? <Box>
            <Typography fontWeight={'bold'} variant={'h4'}>Screenshots Library</Typography>
            <ImageList
                sx={{ width: "100%"}}
                variant="quilted"
                cols={matches ? 4 : 1}
                rowHeight={120}
            >
                {data.map((item, index) => (
                    index !== data.length - 1 && <ImageListItem key={item.image} cols={2} rows={2}>
                        <img style={{borderRadius: '5px'}}
                            {...srcset(item.image, 120)}
                            alt={'...'}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box> : null}

    </>
}

