import React, {FC} from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import {globalStyles} from '../../GlobalStyles/GlobalStyles';
import {useAppSelector} from '../../redux/store';

const MainLayout: FC = () => {
    const {curentTheme} = useAppSelector(state => state.themeReducer)
    return (
        <div style={curentTheme ? globalStyles.light : globalStyles.dark}>
            <Header/>
            <Outlet/>
            <hr/>
            <Footer/>
        </div>
    );
};

export default MainLayout;