import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {urls} from "../../costants/Urls";
import {ISearchModel} from '../../Models/ISearchModel';
import {useForm} from 'react-hook-form';
import style from './Header.module.css'
import {useAppDispatch} from '../../redux/store';
import {themeActions} from '../../redux/slices/themeSlice';
import {Avatar, Chip, FormControlLabel, Stack} from '@mui/material';
import {MaterialUISwitch} from '../../CustomizatedComponents/Switcher';


const Header: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {handleSubmit, register, reset} = useForm<ISearchModel>()
    const searchMovie = (keyword: ISearchModel) => {
        navigate(urls.search.searchPage + `/${keyword.query}`)
        reset()
    }
    const changerTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(themeActions.changeTheme())
    }
    return (
        <div>
            <div className={style.header}>
                <div className={style.nav}>
                    <Link to={'/'} className={style.navLink}>Main</Link>
                    <Link to={urls.genreUrls.allGenres} className={style.navLink}>Genres</Link>
                </div>
                <form onSubmit={handleSubmit(searchMovie)} className={style.searchContainer}>
                    <input type="text" placeholder={'шо треба?'} {...register('query')}
                           className={style.searchInput}/>
                    <button className={style.searchButton}>Search</button>
                </form>
                <div className={style.themeUserBlock}>

                    <FormControlLabel
                        control={<MaterialUISwitch sx={{m: 1}} defaultChecked onChange={changerTheme}/>}
                        label=''
                    />

                    <div className={style.logUser}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                color="success"
                                avatar={<Avatar alt="RoboUser"
                                                src="https://m.media-amazon.com/images/S/pv-target-images/57b889ffc6339a3e9046030f9226a74c2460682fc859976aa1ebff1c1d171323._SX1080_FMjpg_.jpg"/>}
                                label="RoboUser"
                                variant="outlined"

                            />
                        </Stack>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;