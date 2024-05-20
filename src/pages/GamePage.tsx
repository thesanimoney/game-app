import {Box, Grid, Stack} from "@mui/material";
import SideBar from "../components/SideBar.tsx";
import ListGenres from "../components/ListGenres.tsx";
import DynamicText from "../components/DynamicText.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import OrderBy from "../components/OrderBy.tsx";
import GameCards from "../components/GameCards.tsx";

function GamePage() {
    return <>
        <Grid component={Box} display={{xs: 'none', md: 'block'}} item md={3}>
            <SideBar>
                {/* ListGenres component for displaying and selecting genres */}
                <ListGenres></ListGenres>
            </SideBar>
        </Grid>
        {/* Main content area for displaying game cards */}
        <Grid item xs={12} md={9}>
            <Stack mb={'2rem'}>
                <DynamicText></DynamicText>
            </Stack>
            <Stack mb={'2rem'} direction={'row'} columnGap={1}>
                <PlatformSelector />
                <OrderBy></OrderBy>
            </Stack>
            {/* GameCards component with selected genre passed as a prop */}
            <GameCards></GameCards>
        </Grid>
    </>
}

export default GamePage;