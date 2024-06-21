import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import FilmComponent from "../FilmComponent/FilmComponent";
import styles from './AllFilmsComponent.module.css'
import { globalStyles } from '../../GlobalStyles/GlobalStyles';

const AllFilmsComponent: FC = () => {
    const {curentTheme} = useAppSelector(state => state.themeReducer)
    const {results} = useAppSelector(state => state.moviesReducer)
    return (
        <div className={styles.moviesgrid}
             style={curentTheme ? globalStyles.light : globalStyles.dark}>
            {
                results && results.map(movie => <FilmComponent key={movie.id} movie = {movie}/>)
            }
        </div>
    );
};

export default AllFilmsComponent;