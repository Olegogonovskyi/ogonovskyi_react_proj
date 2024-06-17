import React, {FC, useEffect} from 'react';
import {useAppDispatch} from '../../redux/store';
import {moviesActions} from "../../redux/slices/moviesSlice";
import MainSliderComponent from '../../Components/MainSliderComponent/MainSliderComponent';
import AllFilmsPage from '../AllFilmsPage/AllFilmsPage';

const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(moviesActions.loadNowPlayingMovie())
    }, [dispatch]);
    return (
        <div>
            <MainSliderComponent/>
            <hr/>
            <AllFilmsPage/>
        </div>
    );
};

export default MainPage;