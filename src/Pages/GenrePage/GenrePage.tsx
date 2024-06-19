import React, { FC, useEffect } from 'react';
import GenreComponent from '../../Components/GenreComponent/GenreComponent';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { moviesActions } from '../../redux/slices/moviesSlice';

const GenrePage: FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    if(id) {
        useEffect(() => {
            dispatch(moviesActions.loadMovieByGenre(id))
        }, [id]);
    }
    return (
        <div>
            <GenreComponent/>
        </div>
    );
};

export default GenrePage;