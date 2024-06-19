import React, {FC, useEffect} from 'react';
import ColectionsComponent from "../../Components/ColectionsComponent/ColectionsComponent";
import { useAppDispatch } from '../../redux/store';
import { genreActions } from '../../redux/slices/genreSlice';


const ColectionsPage: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(genreActions.loadGenres())
    }, [dispatch]);
    return (
        <div>
            <ColectionsComponent/>
        </div>
    );
};

export default ColectionsPage;