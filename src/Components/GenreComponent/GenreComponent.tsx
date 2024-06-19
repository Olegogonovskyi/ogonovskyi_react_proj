import React, {FC} from 'react';
import styles from './GenreComponent.module.css'
import FilmComponent from '../FilmComponent/FilmComponent';
import { useAppSelector } from '../../redux/store';

const GenreComponent: FC = () => {
    const {results} = useAppSelector(state => state.moviesReducer)


    return (
        <div className={styles.moviesgrid}>
            {
                results && results.map(movie => <FilmComponent key={movie.id} movie = {movie}/>)
            }
        </div>
    );
};

export default GenreComponent;