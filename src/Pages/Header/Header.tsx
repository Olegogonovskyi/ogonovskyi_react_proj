import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {urls} from "../../costants/Urls";

const Header: FC = () => {
    return (
        <div>
            <Link to={'/'}>Main</Link>
            <br/>
            <Link to={urls.search.searchPage}>Search</Link>
            <br/>
            <Link to={urls.genreUrls.allGenres}>Genres</Link>
            <hr/>
            

        </div>
    );
};

export default Header;