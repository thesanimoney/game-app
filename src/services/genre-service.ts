import APIClient from "../apiClient/api-client.ts";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string
}

// Define a custom hook 'useGenres' that uses the 'useData' hook to fetch genre data
export const fetchGenres = new APIClient<Genre>('/genres')