import React, {FC, useEffect} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";


const MainLayout: FC = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
            <hr/>
            <Footer/>
        </div>
    );
};

export default MainLayout;