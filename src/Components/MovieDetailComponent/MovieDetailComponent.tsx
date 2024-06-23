import React, {FC} from 'react';
import {useAppSelector} from '../../redux/store';
import {urls} from '../../costants/Urls';
import style from './MovieDetailComponent.module.css'
import StarRatings from 'react-star-ratings';
import ColectionComponent from '../ColectionComponent/ColectionComponent';
import {globalStyles} from '../../GlobalStyles/GlobalStyles';
import {IconButton} from '@mui/material';
import {StyledBadge} from '../../CustomizatedComponents/BudgeComponent';
import MarkChatReadTwoToneIcon from '@mui/icons-material/MarkChatReadTwoTone';
import ThumbsUpDownTwoToneIcon from '@mui/icons-material/ThumbsUpDownTwoTone';


const MovieDetailComponent: FC = () => {
    const {curentTheme} = useAppSelector(state => state.themeReducer)
    const {movie, video} = useAppSelector(state => state.detailMovieReducer)


    return (
        <div style={curentTheme ? globalStyles.light : globalStyles.dark}>
            {
                movie &&
                <div className={style.movieContainer}>
                    <img src={urls.image(movie.poster_path)} className={style.moviePoster} alt={movie.original_title}
                         key={movie.id}/>
                    <div>
                        <div>
                            <div className={style.titleBlock}>
                                <div>
                                    <h1 className={style.movieTitle}>{movie.original_title}</h1>
                                    <div className={style.genreBlock}>
                                        {
                                            movie.genres.map(genre => <ColectionComponent genre={genre}
                                                                                          key={genre.id}/>)
                                        }
                                    </div>

                                </div>
                                <div>
                                    <div className={style.badgeBlock}>

                                        <div className={style.badgetsIcons}><IconButton aria-label="cart">
                                            <StyledBadge badgeContent={movie.vote_count} max={999999} color="secondary">
                                                <MarkChatReadTwoToneIcon/>
                                            </StyledBadge>
                                        </IconButton></div>
                                        <div className={style.badgetsIcons}><IconButton aria-label="cart">
                                            <StyledBadge badgeContent={movie.vote_average} color="secondary">
                                                <ThumbsUpDownTwoToneIcon/>
                                            </StyledBadge>
                                        </IconButton></div>

                                    </div>
                                    <StarRatings key={movie.id}
                                                 rating={movie.vote_average}
                                                 starRatedColor="#4CAF50"
                                                 numberOfStars={10}
                                                 name='rating'
                                                 starDimension="20px"
                                                 starSpacing="5px"
                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <h5>Budget: {movie.budget}</h5>
                            <h5>Release date: {movie.release_date}</h5>
                            <h5>Original language: {movie.original_language}</h5>
                            <h5>Runtime: {movie.runtime}</h5>
                        </div>
                        <p className={style.movieDescription}>{movie.overview}</p>
                        <div className={style.videoBlock}>
                            <div className={style.videoTitle} key={movie.id}>Videos</div>
                            <div className={style.videoContainer}>

                                {
                                    video &&

                                    video.results.map(trailer => <div>
                                        <iframe
                                            src={urls.videoUrls.showVideo(trailer.key)}

                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            key={movie.id}
                                        ></iframe>
                                    </div>)
                                }</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MovieDetailComponent;