import {Box, Grid, Paper} from "@mui/material";
import Navbar from "../components/Navbar.tsx";
import Theme, {ThemeProvider} from "../config/theme-config.ts";
import {Game} from "../hooks/useInfiniteGames.ts";
import {Outlet} from "react-router-dom";

export interface OpenedGame {
    isOpen: boolean,
    gameData: Game,
    isFavorite: boolean,
    isSnackBarOpened: boolean

}

function HomePage() {
    const {setToggleTheme, toggleTheme, theme} = Theme();
    // State to manage selected genre
    return <>
        <ThemeProvider theme={theme}>
            {/* Paper component for styling and elevation */}
            <Paper elevation={0} sx={{minHeight: '100vh'}}>
                {/* Grid container for layout */}
                <Grid paddingX={'1rem'} container spacing={2} mb={5} justifyContent={'center'}>
                    {/* Navbar component for top navigation */}
                    <Grid item xs={12}>
                        <Box>
                            <Navbar setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}></Navbar>
                        </Box>
                    </Grid>
                    {/*Rest Components for Main Page */}
                    <Outlet></Outlet>
                </Grid>
            </Paper>
        </ThemeProvider>
    </>
}

export default HomePage;