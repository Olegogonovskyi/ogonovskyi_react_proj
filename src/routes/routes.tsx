import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import {urls} from "../costants/Urls";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ColectionsPage from "../Pages/ColectionsPage/ColectionsPage";
import AllFilmsPage from "../Pages/AllFilmsPage/AllFilmsPage";
import MainPage from "../Pages/MainPage/MainPage";
import MovieDetailPage from "../Pages/MovieDetailPage/MovieDetailPage";
import GenrePage from "../Pages/GenrePage/GenrePage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                index: true, element: <MainPage/>
            },
            {
                path: urls.genreUrls.allGenres, element: <ColectionsPage/>
            },
            {
                path: urls.movieUrls.allMovie, element: <AllFilmsPage/>
            },
            {
                path: urls.search.searchPage + '/:query', element: <SearchPage/>
            },
            {
                path: 'movie/:id', element: <MovieDetailPage/>
            },
            {
                path: 'genre/:id', element: <GenrePage/>
            }
        ]
    }
])