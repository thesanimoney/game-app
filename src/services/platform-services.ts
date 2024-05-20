import APIClient from "../apiClient/api-client.ts";
import {Platform} from "../hooks/usePlatform.tsx";

// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
export const fetchPlatforms = new APIClient<Platform>('/platforms/lists/parents')