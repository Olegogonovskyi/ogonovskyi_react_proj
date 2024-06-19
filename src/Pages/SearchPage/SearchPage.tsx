import React, {FC, useEffect} from 'react';
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {moviesActions} from '../../redux/slices/moviesSlice';
import {useParams, useSearchParams} from 'react-router-dom';
import ButtonsComponent from '../../Components/ButtonsComponent/ButtonsComponent';

const SearchPage: FC = () => {
    const {page, total_pages} = useAppSelector(state => state.moviesReducer)
    const [qwerty, setQwerty] = useSearchParams({page: '1'})
    const {keyword} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (keyword) {

            dispatch(moviesActions.searchMovieLoad({keyword: {keyword}, page: qwerty.get('page') || '1'}));
        }
    }, [keyword, qwerty, dispatch]);
    console.log(keyword)
    console.log(page)
    return (
        <div>
            <ButtonsComponent page={page} setQwerty={setQwerty} total_pages={total_pages}/>
            <SearchComponent/>
            <ButtonsComponent page={page} setQwerty={setQwerty} total_pages={total_pages}/>
        </div>
    );
};

export default SearchPage;