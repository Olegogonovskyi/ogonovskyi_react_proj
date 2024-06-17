import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/Urls";
import {IPaginationModel} from "../Models/IPaginationModel";
import {IMovieModel} from "../Models/IMovieModel";


export const moviesApiService = {
    getAllMovies: async (page: string): Promise<IPaginationModel> => {
        const {data} = await axiosInstanse.get<IPaginationModel>(urls.movieUrls.allMovie, {params: {page: page}})
        return data
    },
    getNowPlayingMovies: async (): Promise<IMovieModel[]> => {
        const {data} = await axiosInstanse.get<IPaginationModel>(urls.movieUrls.nowPlayingMovies)
        return data.results
    }
}