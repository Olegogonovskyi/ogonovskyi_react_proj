import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import FilmComponent from "../FilmComponent/FilmComponent";
import styles from './AllFilmsComponent.module.css'

const AllFilmsComponent: FC = () => {
    const {results} = useAppSelector(state => state.moviesReducer)
    return (
        <div className={styles.moviesgrid}>
            {
                results && results.map(movie => <FilmComponent key={movie.id} movie = {movie}/>)
            }
        </div>
    );
};

export default AllFilmsComponent;