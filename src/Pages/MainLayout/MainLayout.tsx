import React, {FC} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";


const MainLayout: FC = () => {
//     const style: React.CSSProperties = {
//         backgroundColor: '#333'
//
// }
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