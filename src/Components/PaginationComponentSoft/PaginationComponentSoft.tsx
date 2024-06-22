import React, {FC} from 'react';
import Pagination from '@mui/material/Pagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';
import style from './PaginationComponentSoft.module.css'

const PaginationComponentSoft: FC<{ total_pages: number, page: number, setQwerty: any }> = ({
                                                                                                total_pages,
                                                                                                setQwerty,
                                                                                                page
                                                                                            }) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQwerty({page: `${value}`})
    }
    return (
        <div className={style.main}>

                <Pagination count={total_pages} page={page} onChange={handleChange} variant="outlined" color="primary"
                            size="large"
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                                    {...item}
                                />
                            )}/>
            
        </div>
    );
};

export default PaginationComponentSoft;