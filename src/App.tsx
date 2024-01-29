import './App.css';
import {Box, Grid, Paper, Stack} from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import GameCards from "./components/GameCards.tsx";
import SideBar from "./components/SideBar.tsx";
import Theme, {ThemeProvider} from "./config/theme-config.ts";
import {useState} from "react";
import ListGenres from "./components/ListGenres.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Genre} from "./hooks/useGenres.tsx";
import OrderBy from "./components/OrderBy.tsx";
import DynamicText from "./components/DynamicText.tsx";
import {Platform} from "./hooks/useGames.tsx";

/**
 * The main application component.
 * @returns {JSX.Element} The rendered App component.
 */

export interface GameQuery {
    genres: Genre,
    parent_platforms: Platform,
    order: string,
    search: string
}

function App() {
    // Custom hook for managing theme settings
    const {setToggleTheme, toggleTheme, theme} = Theme();
    // State to manage selected genre
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <ThemeProvider theme={theme}>
            {/* Paper component for styling and elevation */}
            <Paper elevation={0} sx={{minHeight: '100vh'}}>
                {/* Grid container for layout */}
                <Grid paddingX={'2rem'} container spacing={2} mb={5}>
                    {/* Navbar component for top navigation */}
                    <Grid item xs={12}>
                        <Box>
                            <Navbar setSearchText={(searchText) =>
                                setGameQuery({...gameQuery, search: searchText})}
                                    setToggleTheme={setToggleTheme}
                                    toggleTheme={toggleTheme} searchText={gameQuery.search}>
                            </Navbar>
                        </Box>
                    </Grid>
                    {/* Sidebar component for genre selection */}
                    <Grid component={Box} display={{xs: 'none', md: 'block'}} item md={3}>
                        <SideBar>
                            {/* ListGenres component for displaying and selecting genres */}
                            <ListGenres
                                onSelectGenre={(selectedGenre) => setGameQuery({...gameQuery, genres: selectedGenre})}
                                selectedGenre={gameQuery.genres}></ListGenres>
                        </SideBar>
                    </Grid>
                    {/* Main content area for displaying game cards */}
                    <Grid item xs={12} md={9}>
                        <Stack mb={'2rem'}>
                            <DynamicText selectedPlatform={gameQuery.parent_platforms} selectedGenre={gameQuery.genres}></DynamicText>
                        </Stack>
                        <Stack mb={'2rem'} direction={'row'} columnGap={1}>
                            <PlatformSelector setPlatform={(parent_platform_id: number, parent_platform_name: string) =>
                                setGameQuery({...gameQuery, parent_platforms: {...gameQuery.parent_platforms, id: parent_platform_id, name: parent_platform_name}})}
                                              selectedPlatform={gameQuery.parent_platforms}/>
                            <OrderBy selectedOrder={gameQuery}
                                     setOrder={(order) => setGameQuery({...gameQuery, order: order})}>
                            </OrderBy>
                        </Stack>
                        {/* GameCards component with selected genre passed as a prop */}
                        <GameCards gameQuery={gameQuery}></GameCards>
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    );
}

// Export the 'App' component for use in other parts of the application
export default App;
