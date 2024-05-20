// Importing the custom hook for fetching data
import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_GENRES} from "../config/constants.ts";
import {fetchGenres} from "../services/genre-service.ts";
import {FetchResponse} from "../apiClient/api-client.ts";
import ms from 'ms';

// Define the shape of the 'Genre' object
export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string
}

// export interface DataGenres {
//     result: Genre[]
// }
// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
function UseGenres () {
    return useQuery<FetchResponse<Genre>>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: fetchGenres.getAll,
        staleTime: ms('2 days')
    })
}
// Export the 'useGenres' custom hook for use in other parts of the application
export default UseGenres;