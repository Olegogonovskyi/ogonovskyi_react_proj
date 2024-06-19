import { createSlice } from "@reduxjs/toolkit";
import { IMovieModel } from "../../Models/IMovieModel";
import { IPaginationModel } from "../../Models/IPaginationModel";

const initialState:IPaginationModel<IMovieModel> = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers:
})