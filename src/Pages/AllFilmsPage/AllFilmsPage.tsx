import React, {FC, useEffect} from 'react';
import AllFilmsComponent from "../../Components/AllFilmsComponent/AllFilmsComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useSearchParams} from "react-router-dom";
import ButtonsComponent from "../../Components/ButtonsComponent/ButtonsComponent";

const AllFilmsPage: FC = () => {
    const [qwerty, setQwerty] = useSearchParams({page: '1'})
    const {page, total_pages} = useAppSelector(state => state.moviesReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(moviesActions.loadAllMovies(qwerty.get('page') || '1'))
    }, [dispatch, qwerty]);
    return (
        <div>
            <AllFilmsComponent/>
            <ButtonsComponent page={page} setQwerty={setQwerty} total_pages={total_pages}/>
        </div>
    );
};

export default AllFilmsPage;