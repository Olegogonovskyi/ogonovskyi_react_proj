import React, {FC} from 'react';
import style from './ButtonsComponent.module.css'

const ButtonsComponent: FC<{page: number, total_pages: number, setQwerty: any}> = ({page, total_pages, setQwerty}) => {
    let prev: number | null;
    let next: number | null;
    page > 0 ? prev = (page - 1) :  prev= null
    page < total_pages ? next = page + 1 :  next= null

    const setterPage = (page: string) => {
        switch (page) {
            case 'prev':
                setQwerty({page: `${prev}`})
                break;
            case  'next':
                setQwerty({page: `${next}`})
                break;
        }
    }

    return (
        <div className={style.main}>
            <button className={`${style.button} ${style.prev}`} disabled={!prev} onClick={()=> {setterPage('prev')}}>Prev</button>
            <button className={`${style.button} ${style.next}`} disabled={!next} onClick={()=> {setterPage('next')}}>Next</button>
        </div>
    );
};

export default ButtonsComponent;