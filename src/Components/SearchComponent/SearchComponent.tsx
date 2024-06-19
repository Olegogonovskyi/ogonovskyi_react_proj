import React, {FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { moviesActions } from '../../redux/slices/moviesSlice';
import { useForm } from 'react-hook-form';
import { ISearchModel } from '../../Models/ISearchModel';
import FilmComponent from '../FilmComponent/FilmComponent';
import style from './SearchComponent.module.css'


const SearchComponent: FC = () => {

    const {handleSubmit, register, reset} = useForm<ISearchModel>()
    const dispatch = useAppDispatch()
    const {results} = useAppSelector(state => state.moviesReducer)
    const searchMovie = async (keyword: ISearchModel ) => {
        await dispatch(moviesActions.searchMovieLoad(keyword))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(searchMovie)} className={style.formContainer}>
                <input type="text" placeholder={'шо треба?'} {...register('keyword')} className={style.animatedInput}/>
                <button className={style.animatedButton}>Search</button>
            </form>
            <div className={style.moviesgrid}>{
                results && results.map(movie => <FilmComponent key={movie.id} movie={movie}/>)
            }</div>

        </div>
    );
};

export default SearchComponent;