import React, { Component } from 'react';
import './MovieItem.css';
import store from '../../redux/store';
import {add} from '../Action/Action';

class MovieItem extends Component {

    addMovieToFilm = (poster) => {
        store.dispatch({
          type: add,
          movieIdToFilm: poster
        });
      }
    

    render() {
        const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.addMovieToFilm(poster)} >Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;