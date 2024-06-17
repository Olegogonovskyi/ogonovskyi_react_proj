import React, {FC} from 'react';
import { useAppSelector } from '../../redux/store';
import FilmComponent from '../FilmComponent/FilmComponent';
import { responsive } from '../../sliderHelper/sliderHelper';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ColectionsComponent: FC = () => {
    const {nowPlaying} = useAppSelector(state => state.moviesReducer)
    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}

                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
            {
                nowPlaying && nowPlaying.map(movie => <FilmComponent key={movie.id} movie={movie}/>)
            }
            </Carousel>;
        </div>
    );
};

export default ColectionsComponent;