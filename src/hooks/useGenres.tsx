// Importing the custom hook for fetching data
import useData from "./useData.ts";

// Define the shape of the 'Genre' object
export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string
}
// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
const useGenres = () => useData<Genre>('/genres');

// Export the 'useGenres' custom hook for use in other parts of the application
export default useGenres;