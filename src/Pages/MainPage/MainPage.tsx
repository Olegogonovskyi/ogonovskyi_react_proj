import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {moviesActions} from "../../redux/slices/moviesSlice";
import MainSliderComponent from '../../Components/MainSliderComponent/MainSliderComponent';
import AllFilmsPage from '../AllFilmsPage/AllFilmsPage';
import {useSearchParams} from 'react-router-dom';
import PaginationComponentSoft from '../../Components/PaginationComponentSoft/PaginationComponentSoft';

const MainPage: FC = () => {
    const [qwerty, setQwerty] = useSearchParams({page: '1'})
    const {page, total_pages} = useAppSelector(state => state.moviesReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(moviesActions.loadNowPlayingMovie())
        dispatch(moviesActions.loadAllMovies(qwerty.get('page') || '1'))
    }, [dispatch, qwerty]);
    return (
        <div>
            <MainSliderComponent/>
            <hr/>
            <div><PaginationComponentSoft page={page} setQwerty={setQwerty} key={page} total_pages={total_pages}/></div>
            <AllFilmsPage/>
            <div><PaginationComponentSoft page={page} setQwerty={setQwerty} key={page} total_pages={total_pages}/></div>
        </div>
    );
};

export default MainPage;