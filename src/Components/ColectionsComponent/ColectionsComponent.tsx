import React, {FC} from 'react';
import {useAppSelector} from '../../redux/store';
import ColectionComponent from '../ColectionComponent/ColectionComponent';
import style from './ColectionsComponent.module.css'

const ColectionsComponent: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer)
    return (
        <div className={style.main}>
            {
                genres && genres
                    .map((genre, index) => <ColectionComponent genre={genre} key={index}/>)
            }
        </div>
    );
};

export default ColectionsComponent;