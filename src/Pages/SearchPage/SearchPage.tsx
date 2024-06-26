import React, {FC, useEffect, useState} from 'react';
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {moviesActions} from '../../redux/slices/moviesSlice';
import {useParams, useSearchParams} from 'react-router-dom';
import PaginationComponentSoft from '../../Components/PaginationComponentSoft/PaginationComponentSoft';

const SearchPage: FC = () => {
    const {page, total_pages} = useAppSelector(state => state.moviesReducer)
    const [qwerty, setQwerty] = useSearchParams({page: '1'})
    const {query} = useParams()
    const dispatch = useAppDispatch()
    const [currentPage, setCurrentPage] = useState(qwerty.get('page') || '1');

    useEffect(() => {
        setCurrentPage(qwerty.get('page') || '1');
        if (query) {
            dispatch(moviesActions.searchMovieLoad({query: {query}, page: currentPage}));
        }
    }, [query, currentPage, qwerty]);


    return (
        <div>
            <div><PaginationComponentSoft page={page} setQwerty={setQwerty} key={page} total_pages={total_pages}/></div>
            <SearchComponent/>
            <div><PaginationComponentSoft page={page} setQwerty={setQwerty} key={page} total_pages={total_pages}/></div>
        </div>
    );
};

export default SearchPage;