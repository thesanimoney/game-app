import {useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";

export default function Theme () {
    const [toggleTheme, setToggleTheme] = useState<boolean>(true)

    const theme = createTheme({
        palette: {
            mode: toggleTheme ? 'dark' : 'light'
        },
        typography: {
            h4: {
                fontSize: '2rem', '@media (max-width:900px)': {
                    fontSize: '1.5rem',
                }
            }
        },

        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1200,  // Redefine the "lg" breakpoint size
                xl: 1920,
            }
        }
    })

    return {theme, setToggleTheme, toggleTheme}
}

export {ThemeProvider}

