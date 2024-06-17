import React, {FC} from 'react';

const ButtonsComponent: FC<{page: number, total_pages: number, setQwerty: any}> = ({page, total_pages, setQwerty}) => {
    let prev: number | null;
    let next: number | null;
    page > 0 ? prev = (page - 1) :  prev= null
    page < total_pages ? next = page + 1 :  next= null
   // // const prev = page-1;
   // // const next = page + 1;



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
        <div>
            <button disabled={!prev} onClick={()=> {setterPage('prev')}}>Prev</button>
            <button disabled={!next} onClick={()=> {setterPage('next')}}>Next</button>
        </div>
    );
};

export default ButtonsComponent;