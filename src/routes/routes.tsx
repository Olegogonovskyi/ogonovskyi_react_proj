import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import {urls} from "../costants/Urls";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ColectionsPage from "../Pages/ColectionsPage/ColectionsPage";
import AllFilmsPage from "../Pages/AllFilmsPage/AllFilmsPage";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={urls.movieUrls.allMovie}/>
            },
            {
                path: urls.search.searchPage, element: <SearchPage/>
            },
            {
                path: urls.genreUrls.allGenres, element: <ColectionsPage/>
            },
            {
                path: urls.movieUrls.allMovie, element: <AllFilmsPage/>
            }
        ]}
])