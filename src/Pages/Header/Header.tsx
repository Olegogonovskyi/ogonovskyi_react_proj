import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {urls} from "../../costants/Urls";
import {ISearchModel} from '../../Models/ISearchModel';
import {useForm} from 'react-hook-form';
import style from './Header.module.css'


const Header: FC = () => {
    const navigate = useNavigate()
    const {handleSubmit, register, reset} = useForm<ISearchModel>()
    const searchMovie = (keyword: ISearchModel) => {

        navigate(urls.search.searchPage + `/${keyword.keyword}`)
        reset()
    }
    return (
        <div>
            <div className={style.header}>
                <div className={style.nav}>
                    <Link to={'/'} className={style.navLink}>Main</Link>
                    <Link to={urls.genreUrls.allGenres} className={style.navLink}>Genres</Link>
                </div>

                <form onSubmit={handleSubmit(searchMovie)} className={style.searchContainer}>
                    <input type="text" placeholder={'шо треба?'} {...register('keyword')}
                           className={style.searchInput}/>
                    <button className={style.searchButton}>Search</button>
                </form>
                <div className={style.logUser}>
                    <div >&#9760;</div>
                    <div>username</div>
                </div>

            </div>
        </div>
    );
};

export default Header;