const baseUrl = 'https://api.themoviedb.org/3/'

const urls = {
    movieUrls: {
        allMovie: 'discover/movie',
        popularMovies: 'movie/popular',
        detailsMovie: (id: string) => '/movie/' + id
    },
    genreUrls: {
        allGenres: 'genre/movie/list'
    },
    search: {
        searchPage: 'search',
        searchMovie: 'search/movie'
    }
}

export {
    baseUrl, urls
}


//get  https://api.themoviedb.org/3/discover/movie - взяти фільми +
//get  https://api.themoviedb.org/3/genre/movie/list - Get the list of official genres for movies. +
//get  https://api.themoviedb.org/3/movie/popular - Get a list of movies ordered by popularity. +
//get  https://api.themoviedb.org/3/movie/{movie_id} - Get the top level details of a movie by ID. +
//get  https://api.themoviedb.org/3/movie/{movie_id}/images - Get the top level details of a movie by ID.
//get  https://api.themoviedb.org/3/search/movie - Search for movies by their original, translated and alternative titles. +