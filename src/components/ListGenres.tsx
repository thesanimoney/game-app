import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useGenres, {Genre} from "../hooks/useGenres.tsx";
import {Accordion, AccordionDetails, AccordionSummary, Alert, Avatar, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import croppedImageUrl from "../services/image-url.ts";

/**
 * A functional component that renders a list of game genres in an accordion.
 * Uses the `useGenres` hook to fetch genre data.
 *
 *  The rendered React element.
 */
interface Props {
    onSelectGenre: (genre: Genre) => void | null;
    selectedGenre: Genre
}

function ListGenres({onSelectGenre, selectedGenre}: Props) {
    // Fetch genre data using the useGenres hook
    const { data, error } = useGenres();

    return (
        <>
            {/* Display an error alert if there is an error */}
            {error && <Alert severity="error">{error.message}</Alert>}

            {/* Accordion component to organize the list */}
            <Accordion defaultExpanded={true} sx={{ boxShadow: 'none' }}>
                {/* Accordion summary with an expand icon and title */}
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant={'h6'}>Game Genres</Typography>
                </AccordionSummary>

                {/* Accordion details containing the list of genres */}
                <AccordionDetails>
                    {/* MUI List component to display the genres */}
                    <List>
                        {/* Map through the genre data and create a ListItem for each genre */}
                        {data.map((genre) => (
                            <ListItem key={genre.id} disablePadding>
                                {/* ListItemButton to make the item interactive */}
                                <ListItemButton selected={selectedGenre && genre.id === selectedGenre.id}
                                                onClick={() => onSelectGenre && onSelectGenre(genre)}>
                                <Avatar sx={{marginRight: '0.5rem'}} src={croppedImageUrl(genre.image_background)}></Avatar>
                                    {/* ListItemText to display the genre name */}
                                    <ListItemText primary={genre.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default ListGenres;
