import React, {FC} from 'react';
import {IMovieModel} from "../../Models/IMovieModel";
import { urls } from '../../costants/Urls';
import styles from './FilmComponent.module.css'
import { useNavigate } from 'react-router-dom';

const FilmComponent: FC<{movie: IMovieModel}> = ({movie}) => {
    const {id,title, overview, poster_path} = movie
    const navigate = useNavigate()
    return (
        <div className={styles.movie} onClick={()=> {navigate(`/movie/${id.toString()}`)}}>
            <img className={styles.poster} src={urls.image(poster_path)} alt={title}/>
            <h5 className={styles.title}>{title}</h5>

        </div>
    );
};

export default FilmComponent;