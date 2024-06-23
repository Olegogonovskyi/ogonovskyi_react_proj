import React, {FC} from 'react';
import {IMovieModel} from "../../Models/IMovieModel";
import {urls} from '../../costants/Urls';
import styles from './FilmComponent.module.css'
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../redux/store';
import {globalStyles} from '../../GlobalStyles/GlobalStyles';
import {StyledBadge} from '../../CustomizatedComponents/BudgeComponent';

const FilmComponent: FC<{ movie: IMovieModel }> = ({movie}) => {

    const {curentTheme} = useAppSelector(state => state.themeReducer)
    const {id, title, poster_path} = movie
    const navigate = useNavigate()
    return (
        <div>

            <div style={curentTheme ? globalStyles.light : globalStyles.dark}
                 className={styles.movie} onClick={() => {
                navigate(`/movie/${id.toString()}`)
            }}>
                <img className={styles.poster} src={urls.image(poster_path)} alt={title}/>
                <h5 className={styles.title}>{title}</h5>
            </div>
            <div className={styles.underlay}><StyledBadge badgeContent={movie.vote_average} color="success">

            </StyledBadge></div>

        </div>
    );
};

export default FilmComponent;