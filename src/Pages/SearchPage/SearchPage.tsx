import React, {FC, useEffect} from 'react';
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import { useAppDispatch } from '../../redux/store';
import { moviesActions } from '../../redux/slices/moviesSlice';
import { useParams } from 'react-router-dom';


const SearchPage: FC = () => {
    const {keyword} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (keyword) {
            dispatch(moviesActions.searchMovieLoad({ keyword }));
        }
    }, [keyword, dispatch]);
    console.log(keyword)
    return (
        <div>

            <SearchComponent/>
        </div>
    );
};

export default SearchPage;