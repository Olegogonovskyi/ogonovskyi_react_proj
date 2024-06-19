import React, {FC} from 'react';
import {useAppSelector} from '../../redux/store';
import {urls} from '../../costants/Urls';
import style from './MovieDetailComponent.module.css'

const MovieDetailComponent: FC = () => {
    const {movie, video} = useAppSelector(state => state.detailMovieReducer)

    return (
        <div>
            {
                movie &&
                <div className={style.movieContainer}>
                    <img src={urls.image(movie.poster_path)} className={style.moviePoster} alt={movie.original_title}/>
                    <div>
                        <h1 className={style.movieTitle}>{movie.original_title}</h1>

                        <p className={style.movieDescription}>{movie.overview}</p>
                        <div className={style.videoBlock}>
                            <div className={style.videoTitle}>Videos</div>
                            <div className={style.videoContainer}>

                                {
                                    video &&
                                    video.results.map((trailer, index) => <div >
                                        <iframe
                                            src={urls.videoUrls.showVideo(trailer.key)}

                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen

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