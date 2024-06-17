import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import {urls} from "../costants/Urls";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ColectionsPage from "../Pages/ColectionsPage/ColectionsPage";
import AllFilmsPage from "../Pages/AllFilmsPage/AllFilmsPage";
import MainSliderPage from "../Pages/MainSliderPage/MainSliderPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: urls.genreUrls.allGenres, element: <ColectionsPage/>
            },
            {
                path: urls.movieUrls.allMovie, element: <AllFilmsPage/>
            },
            {
                path: urls.search.searchPage, element: <SearchPage/>
            }
        ]
    }
])