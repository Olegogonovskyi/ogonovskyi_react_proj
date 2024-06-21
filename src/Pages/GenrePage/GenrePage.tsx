import React, {FC, useEffect, useState} from 'react';
import GenreComponent from '../../Components/GenreComponent/GenreComponent';
import {useParams, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {moviesActions} from '../../redux/slices/moviesSlice';
import ButtonsComponent from '../../Components/ButtonsComponent/ButtonsComponent';

const GenrePage: FC = () => {
    const {page, total_pages} = useAppSelector(state => state.moviesReducer)
    const [qwerty, setQwerty] = useSearchParams({page: '1'})
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState(qwerty.get('page') || '1');
    useEffect(() => {
        setCurrentPage(qwerty.get('page') || '1');
        if (id) {
            dispatch(moviesActions.loadMovieByGenre({page: currentPage, id: id}))
        }
    }, [qwerty, currentPage, id]);

    return (
        <div>
            <ButtonsComponent page={page} setQwerty={setQwerty} total_pages={total_pages}/>
            <GenreComponent/>
            <ButtonsComponent page={page} setQwerty={setQwerty} total_pages={total_pages}/>
        </div>
    );
};

export default GenrePage;