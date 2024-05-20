import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_PLATFORMS} from "../config/constants.ts";
import {fetchPlatforms} from "../services/platform-services.ts";
import {FetchResponse} from "../apiClient/api-client.ts";
import ms from "ms";

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatform = () => useQuery<FetchResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: fetchPlatforms.getAll,
    staleTime: ms('2 days')
})

export default usePlatform;