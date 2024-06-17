import React, {FC, useEffect} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAppDispatch } from '../../redux/store';
import {moviesActions} from "../../redux/slices/moviesSlice";
import MainSliderComponent from '../../Components/MainSliderComponent/MainSliderComponent';

import AllFilmsPage from '../AllFilmsPage/AllFilmsPage';


const MainLayout: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(moviesActions.loadNowPlayingMovie())
    }, [dispatch]);
    return (
        <div>
            <Header/>
            <MainSliderComponent/>
            <hr/>
            <AllFilmsPage/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;