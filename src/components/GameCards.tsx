import {
    Alert,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
    Skeleton,
} from "@mui/material";
import PlatformIcon from "./PlatformIcon.tsx";
import ScoreBadge from "./ScoreBadge.tsx";
import GetCroppedImageUrl from "../services/image-url.ts";
import CopyButton from "./CopyButton.tsx";
import useInfiniteGames from "../hooks/useInfiniteGames.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularLoading from "./CircularLoading.tsx";
import useStoreGameQuery from "../hooks/useGameQuery.ts"
import {useNavigate} from "react-router-dom";

function GameCards() {
    const {gameQuery} = useStoreGameQuery()
    const {data, error,  isLoading, fetchNextPage, hasNextPage} = useInfiniteGames(gameQuery)

    const fetchedGamesCount = data ? data?.pages.reduce((accumulator, current) => {
      return  accumulator + current.results.length
    }, 0) : 0

   const navigate = useNavigate()

    return (
        <>
            <InfiniteScroll next={fetchNextPage} hasMore={hasNextPage} loader={<CircularLoading/>} dataLength={fetchedGamesCount}>
            {error && <Alert severity="error">{error.message}</Alert>}
            <Grid mb={"50px"} justifyContent={{lg: 'flex-start', sm: 'center', md: 'center', xs: 'center'}}
                  container rowGap={2.1} columnGap={2.1}>
                {data?.pages.map(page =>
                    page.results.map((el, index) =>
                    <Grid key={index} item xs={12} md={5} sm={7} lg={3.8}>
                    <Card key={el.id}>
                        <CardMedia
                            sx={{height: 250}}
                            image={isLoading ? '' : (el.background_image ?
                                GetCroppedImageUrl(el.background_image) : './src/assets/WebStorm.jpeg')}
                            title={isLoading ? '' : el.name}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {isLoading ? <Skeleton animation="wave" height={10} width="80%"
                                                        style={{ marginBottom: 6 }} /> : el.name}
                            </Typography>

                            <Stack alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}
                                   sx={{flexDirection: 'row'}}>
                                {isLoading ? <Skeleton animation="wave" variant="circular" width={40} height={40} /> :
                                    <PlatformIcon platforms={el?.parent_platforms.map(el => el.platform)}></PlatformIcon>}
                                {isLoading ? <Skeleton animation="wave" variant="rectangular" height={30} width={60} /> :
                                    <ScoreBadge metacritic={el.metacritic}></ScoreBadge>}
                            </Stack>
                        </CardContent>

                        <CardActions>
                            {isLoading ? (
                                <Skeleton animation="wave" variant="rectangular" height={30} width={120} />
                            ) : (
                                <>
                                    <CopyButton></CopyButton>
                                   <Button onClick={() => navigate(`games/${el.slug}`)} size="small">Learn More</Button>
                                </>
                            )}
                        </CardActions>
                    </Card>
                </Grid>))}
            </Grid>
            </InfiniteScroll>
        </>
    );
}

export default GameCards;
