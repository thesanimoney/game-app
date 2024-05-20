import {useQuery} from "@tanstack/react-query";
import {fetchScreenshots} from "../services/screenshot-service.ts";

export interface Screenshot {
    image: string,
}

const useGameScreenshots = (endpoint: string) => {
    return useQuery<Screenshot[]>({
        queryKey: ['game-screenshots', endpoint],
        queryFn: () => fetchScreenshots.getMedia(endpoint),
    })

}

export default useGameScreenshots;