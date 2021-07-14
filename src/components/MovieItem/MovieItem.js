import React, { Component } from 'react';
import './MovieItem.css';
import store from '../../redux/store';
import {add} from '../Action/Action';
// import Subscribe from ./Subscribe/Subscribe;

class MovieItem extends Component {

    addMovieToFilm = (imdbID) => {
        store.dispatch({
          type: add,
          movieIdToFilm: imdbID
           })
      }


    

    render() {
        const { Poster, Title, Year, imdbID} = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.addMovieToFilm(imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;