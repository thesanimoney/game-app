import { CACHE_KEY_GAMES } from "../config/constants.ts";
import { fetchGames } from "../services/games-service.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import {FetchResponse} from "../apiClient/api-client.ts";
import {Platform} from "./usePlatform.tsx";
import {GameQuery} from "./useGameQuery.ts";
import {Screenshot} from "./useGameScreenshots.ts";

export interface Game {
    id: number,
    slug: string,
    name: string,
    released: string,
    tba: true,
    background_image: string,
    rating: number,
    short_screenshots: Screenshot[],
    platforms: { platform: Platform }[],
    parent_platforms: { platform: Platform }[],
    metacritic: number
}

function UseInfiniteGames(gameQuery: GameQuery) {
    // const genresSlug = gameQuery.genresId ? gameQuery.genresId?.slug : null;

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: [CACHE_KEY_GAMES, gameQuery], // Update the queryKey to include gameQuery
        queryFn: ({ pageParam = 1}) => {
           return fetchGames.getAll({
                params: {
                    genres: gameQuery.genresId,
                    parent_platforms: gameQuery.parent_platforms,
                    ordering: gameQuery.order,
                    search: gameQuery.search,
                    page: pageParam || 1 // Use pageParam if provided, default to 1 otherwise
                }
            })
        },
        getNextPageParam: (lastPage, allPages) => {
            // Implement logic to determine the next page number here
            // Example: return lastPage.length + 1 if there are more pages, otherwise return undefined
            return lastPage.next ? allPages.length + 1 : undefined; // Assuming each page has 10 items
        },
        initialPageParam: 1 // Set initialPageParam to start from the first page
    });
}

export default UseInfiniteGames;
