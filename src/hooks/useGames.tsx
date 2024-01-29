// Importing the custom hook for fetching data
import useData from "./useData.ts";
import {GameQuery} from "../App.tsx";
// Define the shape of the 'Platform' object
export interface Platform {
    id: number;
    slug: string;
    name: string;
}

// Define the shape of the 'Game' object
export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

// Define a custom hook 'UseGames' that uses the 'useData' hook to fetch game data
const UseGames = (gameQuery: GameQuery) => {
    // Ensure gameQuery.genres is defined before accessing its properties
    const genresSlug = gameQuery.genres ? gameQuery.genres.slug : null;

    return useData<Game>('/games', {
        params: {
            genres: genresSlug,
            parent_platforms: gameQuery?.parent_platforms?.id || null,
            ordering: gameQuery.order,
            search: gameQuery.search
        }
    }, [gameQuery]);
};



// Export the 'UseGames' custom hook for use in other parts of the application
export default UseGames;
