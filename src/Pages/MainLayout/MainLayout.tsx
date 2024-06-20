import React, {FC} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";


const MainLayout: FC = () => {

    // const styles: React.CSSProperties = {
    //     backgroundColor: '#292b2e',
    //     color:  '#fde2c3',
    //     padding: '20px',
    //     borderRadius: '5px'
    // };
    return (
        <div >
            <Header/>
            <Outlet/>
            <hr/>
            <Footer/>
        </div>
    );
};

export default MainLayout;