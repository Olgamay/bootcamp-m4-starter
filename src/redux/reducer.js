import {add} from '../components/Action/Action';

let initialState = {
    film: [],
    movies: [ 
        {
        imdbID: 'tt3896198',
        title: "Guardians of the Galaxy Vol. 2",
        year: 2017,
        poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    },
    {
        imdbID: 'tt0068646',
        title: "The Godfather",
        year: 1972,
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    }
    ]
}

function reducer(state = initialState, action) {
    if (action.type === add) {
        let movie = state.movies.find(movie =>movie.poster === action.movieIdToFilm);
        let updateFilm = [...state.film, movie];
        let updateState = {...state};
        updateState.film = updateFilm
        return updateState;
    }

    return state;
}

export default reducer;