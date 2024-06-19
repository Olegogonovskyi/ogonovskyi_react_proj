import React, {FC} from 'react';
import {useAppSelector } from '../../redux/store';

import FilmComponent from '../FilmComponent/FilmComponent';
import style from './SearchComponent.module.css'


const SearchComponent: FC = () => {

    const {results} = useAppSelector(state => state.moviesReducer)

    return (
        <div>

            <div className={style.moviesgrid}>{
                results && results.map(movie => <FilmComponent key={movie.id} movie={movie}/>)
            }</div>

        </div>
    );
};

export default SearchComponent;