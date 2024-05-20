import APIClient from "../apiClient/api-client.ts";
import {Video} from "../hooks/useGameMedia.ts";
// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
export const fetchTrailers = new APIClient<Video>('/games/')