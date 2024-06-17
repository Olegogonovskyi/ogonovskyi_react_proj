import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import FilmComponent from "../FilmComponent/FilmComponent";

const AllFilmsComponent: FC = () => {
    const {results} = useAppSelector(state => state.moviesReducer)
    return (
        <div>
            {
                results && results.map(movie => <FilmComponent key={movie.id} movie = {movie}/>)
            }
        </div>
    );
};

export default AllFilmsComponent;