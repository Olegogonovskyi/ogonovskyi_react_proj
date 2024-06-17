import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/Urls";
import {IPaginationModel} from "../Models/IPaginationModel";
import {IMovieModel} from "../Models/IMovieModel";
import { ISearchModel } from "../Models/ISearchModel";



export const moviesApiService = {
    getAllMovies: async (page: string): Promise<IPaginationModel<IMovieModel>> => {
        const {data} = await axiosInstanse.get<IPaginationModel<IMovieModel>>(urls.movieUrls.allMovie, {params: {page: page}})
        return data
    },
    getNowPlayingMovies: async (): Promise<IMovieModel[]> => {
        const {data} = await axiosInstanse.get<IPaginationModel<IMovieModel>>(urls.movieUrls.nowPlayingMovies)
        return data.results
    },
    searchMovie: async ({keyword}: ISearchModel): Promise<IPaginationModel<IMovieModel>> => {
        const {data} = await axiosInstanse.get<IPaginationModel<IMovieModel>>(urls.search.searchMovie, {params: {query: keyword}})
        return data
        
    }
}