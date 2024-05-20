import {useQuery} from "@tanstack/react-query";
import {fetchGameDetails} from "../services/game-details-service.ts";
import {GameDetails} from "../entities/GameDetailsInterface.ts";

const useGameDetails = (slug: string | undefined) => {
    return useQuery<GameDetails>({
        queryKey: ['game-details', slug],
        queryFn: () => fetchGameDetails.getGameDetails(slug),
    })

}

export default useGameDetails;