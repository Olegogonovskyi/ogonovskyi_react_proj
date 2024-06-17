import React, {FC, useEffect} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAppDispatch } from '../../redux/store';
import {moviesActions} from "../../redux/slices/moviesSlice";


const MainLayout: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(moviesActions.loadNowPlayingMovie())
    }, [dispatch]);
    
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;