import {add, refresh} from '../components/Action/Action';

let initialState = {
    film: [],
    movies: [ 
        {
        imdbID: 'tt3896198',
        Title: "Guardians of the Galaxy Vol. 2",
        Year: 2017,
        Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    },
    {
        imdbID: 'tt0068646',
        Title: "The Godfather",
        Year: 1972,
        Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    }
    ]
}

function reducer(state = initialState, action) {
    if (action.type === add) {
        console.log("-", state)
        console.log("+", action)

        let movie = state.movies.find(item => item.imdbID === action.movieIdToFilm);
        console.log("2", movie)

        let updateFilm = [...state.film, movie];
        console.log("3", updateFilm)

        let updateState = {...state};
        updateState.film = updateFilm

        return updateState;
    } else if (action.type === refresh) {
        // let updateState = state.movies.filter(item => {
        //     return item.imdbID !== action.refreshToMovie
        // })
        let newState = {...state};
        newState.movies = action.movies.Search;

        // state.updateFilm = updateState
        return newState
        
        // console.Log('+++', updateState)
        // console.log(this.setInitialState.movies)
        // console.log('---', state)
        // console.log('+++', action.movies)
        
    }

    return state;
}

export default reducer;