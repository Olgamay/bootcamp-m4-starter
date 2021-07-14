import React, { Component } from 'react';
import store from '../../redux/store';
import './Favorites.css';
import {refresh} from '../Action/Action';


class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [
            // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]

    }

    componentDidMount() {
        store.subscribe(() =>  {
            let globalState = store.getState();
            this.setState({
                // здесь была ошибка при записи данных в локальный стейт
                movies: globalState.film
            });
        });
    }

    refreshMovie = (id) => {
        store.dispatch ({
            type: refresh,
            refreshToMovie: id
    })
    }
    
    listNameChangeHandler = (e) => {
        this.setState({ title: e.target.value });
    }


    getFilm() {
        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            metod: 'POST',
            headers: {
                "Content-type": 'application/json'
                // "title": "Example List",
                // "movies": [
                //     "tt0068646",
                //     "tt0098019"
                // ]
            },
            body: JSON.stringify(info)
        })

        fetch('https://acb-api.algoritmika.org/api/movies/list')
        .then(response => response.json())
        .then(data => {

            console.log(data.Title);
        })
        .catch(error => {
            console.log("Произошла ошибка")
        })
    }

    render() { 
        const {title} = this.state;

        return (
            <div className="favorites">
                <input value={title} className="favorites__name"  onChange={this.listNameChangeHandler}/>
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                    return  <li 
                                key={item.id}>{item.Title} ({item.Year})
                                <button type="button" 
                                onClick={() => this.refreshMovie(item.imdbID)}>X</button>
                            </li>;                        
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick={this.getFilm}>Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;