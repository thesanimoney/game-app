import Error from "../components/Error.tsx";
import Theme, {ThemeProvider} from "../config/theme-config.ts";
import {Box, Grid, Paper} from "@mui/material";
import Navbar from "../components/Navbar.tsx";

function ErrorPage() {
    const {setToggleTheme, toggleTheme, theme} = Theme();
    return <>
        <ThemeProvider theme={theme}>
            {/* Paper component for styling and elevation */}
            <Paper elevation={0} sx={{minHeight: '100vh'}}>
                {/* Grid container for layout */}
                <Grid paddingX={'2rem'} container spacing={2} mb={5}>
                    {/* Navbar component for top navigation */}
                    <Grid item xs={12}>
                        <Box>
                            <Navbar setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}></Navbar>
                        </Box>
                    </Grid>
                    {/*Rest Components for Main Page */}
                    <Box sx={{paddingLeft: '16px'}}>
                        <Error>
                    </Error>
                    </Box>
                </Grid>
            </Paper>
        </ThemeProvider>

        </>
}

export default ErrorPage;