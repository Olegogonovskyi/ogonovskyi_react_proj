import React, {FC} from 'react';
import AllFilmsComponent from "../../Components/AllFilmsComponent/AllFilmsComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";


const AllFilmsPage: FC = () => {
    
    
    return (
        <div>
            <AllFilmsComponent/>
            
        </div>
    );
};

export default AllFilmsPage;