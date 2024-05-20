import { create } from "zustand";

export interface GameQuery {
    genresId?: number | undefined,
    parent_platforms?: number,
    order?: string,
    search?: string,
    page?: number
}

interface StoreGameQuery {
    gameQuery: GameQuery;
    setPlatformId: (id: number) => void;
    setGenreId: (id: number | undefined) => void;
    setSearchText: (text: string) => void;
    setSortOrder: (order: string) => void;
}

const useStoreGameQuery = create<StoreGameQuery>((set) => ({
    gameQuery: {} as GameQuery,
    setPlatformId: (platformId) => set((state) =>
        ({...state, gameQuery: {...state.gameQuery, parent_platforms: platformId}})),
    setGenreId: (id) => set((state) =>
        ({...state, gameQuery: {...state.gameQuery, genresId: id}})),
    setSearchText: (text) => set(() =>
        ({gameQuery: {search: text}})),
    setSortOrder: (sort: string) => set((state) =>
        ({gameQuery: {...state.gameQuery, order: sort}}))

}));

export default useStoreGameQuery
