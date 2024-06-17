import {IMovieModel} from "./IMovieModel";

export interface IPaginationModel {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number
}