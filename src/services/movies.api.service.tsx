import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/Urls";
import {IPaginationModel} from "../Models/IPaginationModel";
import {IMovieModel} from "../Models/IMovieModel";
import {ISearchModel} from "../Models/ISearchModel";
import {IMovieDetailInfo} from "../Models/IMovieDetailInfo";
import { IVideoModel } from "../Models/IVideoModel";


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
    },
    movieDetails: async (movieId: string): Promise<IMovieDetailInfo> => {
        const {data} = await axiosInstanse.get<IMovieDetailInfo>(urls.movieUrls.detailsMovie(movieId))
        return data
    },
    getVideos: async (movieId: string): Promise<IVideoModel> => {
        const {data} = await axiosInstanse.get<IVideoModel>(urls.videoUrls.getVideos(movieId))
        return data
    }
}