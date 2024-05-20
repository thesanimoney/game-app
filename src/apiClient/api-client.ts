import axios, {AxiosRequestConfig} from "axios";

import {GameDetails} from "../entities/GameDetailsInterface.ts";

export const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aee44b4801ef46cebd02cda27a088e51'
    }
})
export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null
}


export default class API<T> {
    constructor(public endpoint: string) {
    }
    getAll = (requestConfig?: AxiosRequestConfig) => {
        return apiClient.get<FetchResponse<T>>(this.endpoint, {...requestConfig})
            .then(res => res.data)
            .catch(err => err)
    }

    getGameDetails = (slug: string | undefined) => {
        return apiClient.get<GameDetails>(this.endpoint + slug)
            .then(res => res.data)
            .catch(err => err)
    }

    getMedia = (endpoint: string | undefined) => {
        return apiClient.get<FetchResponse<T>>(this.endpoint + endpoint)
            .then(res => res.data.results)
            .catch(err => err)
    }
}

