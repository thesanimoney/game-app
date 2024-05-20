import APIClient from "../apiClient/api-client.ts";
import {Game} from "../hooks/useInfiniteGames.ts";

// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
export const fetchGames = new APIClient<Game>('/games')