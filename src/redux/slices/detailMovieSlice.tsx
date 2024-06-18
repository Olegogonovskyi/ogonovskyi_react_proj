import {createSlice} from "@reduxjs/toolkit";
import {IMovieDetailInfo} from "../../Models/IMovieDetailInfo";

type initialStateType = {
    movie: IMovieDetailInfo | null
}

const initialState: initialStateType = {
    movie: null
}

const detailMovieSlice = createSlice({
        name: 'detailMovieSlice',
        reducers: {},
        initialState,

    }
)