import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/Urls";
import {IPaginationModel} from "../Models/IPaginationModel";
import {IMovieModel} from "../Models/IMovieModel";
import { ISearchRespModel } from "../Models/ISearchRespModel";


export const moviesApiService = {
    getAllMovies: async (page: string): Promise<IPaginationModel<IMovieModel>> => {
        const {data} = await axiosInstanse.get<IPaginationModel<IMovieModel>>(urls.movieUrls.allMovie, {params: {page: page}})
        return data
    },
    getNowPlayingMovies: async (): Promise<IMovieModel[]> => {
        const {data} = await axiosInstanse.get<IPaginationModel<IMovieModel>>(urls.movieUrls.nowPlayingMovies)
        return data.results
    },
    searchMovie: async (keyword: string): Promise<ISearchRespModel> => {
        const {data} = await axiosInstanse.get(urls.search.searchMovie(keyword))
        return data
        //https://developer.themoviedb.org/reference/search-movie ТУТ ПЕРЕРОБИТИ
    }
}