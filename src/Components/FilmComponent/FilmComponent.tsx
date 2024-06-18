import React, {FC} from 'react';
import {IMovieModel} from "../../Models/IMovieModel";
import { urls } from '../../costants/Urls';
import styles from './FilmComponent.module.css'

const FilmComponent: FC<{movie: IMovieModel}> = ({movie}) => {
    const {title, overview, poster_path} = movie
    return (
        <div className={styles.movie} >
            <img className={styles.poster} src={urls.image(poster_path)} alt={title}/>
            <h5 className={styles.title}>{title}</h5>

        </div>
    );
};

export default FilmComponent;