import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPaginationModel} from "../../Models/IPaginationModel";
import {ISearchServiceType, moviesApiService} from "../../services/movies.api.service";
import {AxiosError} from "axios";
import {IMovieModel} from "../../Models/IMovieModel";


type initialStateProps = IPaginationModel<IMovieModel> & { nowPlaying: IMovieModel[] }
const initialState: initialStateProps = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    nowPlaying: []
}

const searchMovieLoad = createAsyncThunk(
    'moviesSlice/searchMovieLoad',
    async ({query: {query}, page}: ISearchServiceType, thunkAPI) => {
        try {
            const response = await moviesApiService.searchMovie({query: {query}, page})
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const loadNowPlayingMovie = createAsyncThunk(
    'moviesSlice/loadNowPlayingMovie',
    async (_: void, thunkAPI) => {
        try {
            const response = await moviesApiService.getNowPlayingMovies()
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const loadAllMovies = createAsyncThunk(
    'moviesSlice/loadAllMovies',
    async (arg: string, thunkAPI) => {
        try {
            const response = await moviesApiService.getAllMovies(arg)
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const loadMovieByGenre = createAsyncThunk(
    'createSlice/loadMovieByGenre',
    async (arg: string, thunkAPI) => {
        try {
            const response = await moviesApiService.getMoviesByGenre(arg)
            console.log('API Response:', response);
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadAllMovies.fulfilled, (state, action: PayloadAction<IPaginationModel<IMovieModel>>) => {
            return {...state, ...action.payload};
        })
        .addCase(loadNowPlayingMovie.fulfilled, (state, action: PayloadAction<IMovieModel[]>) => {
            state.nowPlaying = action.payload
        })
        .addCase(searchMovieLoad.fulfilled, (state, action: PayloadAction<IPaginationModel<IMovieModel>>) => {
            return {...state, ...action.payload};
        })
        .addCase(loadMovieByGenre.fulfilled, (state, action: PayloadAction<IPaginationModel<IMovieModel>>) => {
            return {...state, ...action.payload};
        })

})

const {reducer: moviesReducer, actions} = moviesSlice

const moviesActions = {
    ...actions,
    loadAllMovies,
    loadNowPlayingMovie,
    searchMovieLoad,
    loadMovieByGenre
}

export {moviesActions, moviesReducer}