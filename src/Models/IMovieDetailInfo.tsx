import { IGenreModel } from "./IGenreModel"

export interface IMovieDetailInfo {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number
    genres: IGenreModel[],
    homepage: string
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}