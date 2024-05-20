import {useQuery} from "@tanstack/react-query";
import {fetchTrailers} from "../services/trailers-service.ts";
export interface Video {
    id: number;
    name: string;
    preview: string;
    data: {
        480: string;
        max: string;
    };
}


const useGameMedia = (endpoint: string) => {
    return useQuery<Video[]>({
        queryKey: ['game-trailer', endpoint],
        queryFn: () => fetchTrailers.getMedia(endpoint),
    })

}

export default useGameMedia;