import APIClient from "../apiClient/api-client.ts";

import {GameDetails} from "../entities/GameDetailsInterface.ts";


// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
export const fetchGameDetails = new APIClient<GameDetails>('/games/')