import React, {FC, useEffect} from 'react';
import MovieDetailComponent from '../../Components/MovieDetailComponent/MovieDetailComponent';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../redux/store';
import {detailMovieActions} from "../../redux/slices/detailMovieSlice";

const MovieDetailPage: FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    if (id) {
        useEffect(() => {
            dispatch(detailMovieActions.loadmovieDetails(id))
            dispatch(detailMovieActions.loadmovieVideo(id))
        }, [id]);
    }
    return (
        <div>
            <MovieDetailComponent/>
        </div>
    );
};

export default MovieDetailPage;