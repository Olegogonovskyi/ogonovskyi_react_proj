import React, { FC } from 'react';
import { IGenreModel } from '../../Models/IGenreModel';
import style from './ColectionComponent.module.css'
import { useNavigate } from 'react-router-dom';

const ColectionComponent: FC<{genre: IGenreModel}> = ({genre}) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=> {navigate(`/genre/${genre.id.toString()}`)}}>
            <div className={style.button}>{genre.name}</div>
        </div>
    );
};

export default ColectionComponent;