import React, { FC } from 'react';
import { IGenreModel } from '../../Models/IGenreModel';
import style from './ColectionComponent.module.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { globalStyles } from '../../GlobalStyles/GlobalStyles';

const ColectionComponent: FC<{genre: IGenreModel}> = ({genre}) => {
    const {curentTheme} = useAppSelector(state => state.themeReducer)
    const navigate = useNavigate()
    return (
        <div
            style={curentTheme ? globalStyles.light : globalStyles.dark}
            onClick={()=> {navigate(`/genre/${genre.id.toString()}`)}}>
            <div className={style.button}>{genre.name}</div>
        </div>
    );
};

export default ColectionComponent;