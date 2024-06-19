import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {moviesReducer} from "./slices/moviesSlice";
import { detailMovieReducer } from "./slices/detailMovieSlice";

export const store = configureStore({
    reducer: {
        moviesReducer,
        detailMovieReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>();

export {useAppDispatch, useAppSelector}