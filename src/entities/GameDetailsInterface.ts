import {Genre} from "../hooks/useGenres.tsx";
import {Platform} from "../hooks/usePlatform.tsx";

interface Tags {
    name: string
}

interface Store {
    name: string,
    domain: string
}

interface Publisher {
    name: string
}

interface Developer {
    name: string
}

export interface GameDetails {
    id: number,
    description_raw: string,
    name: string,
    description: string,
    tags: Tags[],
    stores: { store: Store }[],
    publishers: Publisher[],
    genres: Genre[],
    developers: Developer[],
    platforms: { platform: Platform }[],
    background_image: string
}