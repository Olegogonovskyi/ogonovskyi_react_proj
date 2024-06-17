import React, {FC} from 'react';
import {IMovieModel} from "../../Models/IMovieModel";

const FilmComponent: FC<{movie: IMovieModel}> = ({movie}) => {
    const {title, overview} = movie
    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    );
};

export default FilmComponent;