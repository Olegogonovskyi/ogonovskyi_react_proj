import React from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {ISearchModel} from '../../Models/ISearchModel';
import {urls} from '../../costants/Urls';
import style from './Footer.module.css'

const Footer = () => {
    const navigate = useNavigate()
    const {handleSubmit, register, reset} = useForm<ISearchModel>()
    const searchMovie = (keyword: ISearchModel) => {
        navigate(urls.search.searchPage + `/${keyword.query}`)
        reset()
    }
    return (
        <div className={style.footer}>
            <div>
                Support
                <ul>
                    <li>Olegogonowskyi@gmail.com</li>
                    <li><a href="https://www.facebook.com/olegwerechak">Oleg Ogonovskyi</a></li>
                    <li>Privacy Politik - no privacy</li>
                </ul>
            </div>
            <div>
                <form onSubmit={handleSubmit(searchMovie)} className={style.searchContainer}>
                    <input type="text" placeholder={'шо треба?'} {...register('query')}
                           className={style.searchInput}/>
                    <button className={style.searchButton}>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;