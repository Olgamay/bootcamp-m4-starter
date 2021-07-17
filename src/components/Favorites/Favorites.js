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
        let data = {
            title: "Example List",
            movies: [
                "tt0068646",
                "tt0098019"
            ]
        };

        const getFilmsContent = ({this.state.movies.imdbID}) => {
            let content = [];
            for (let i = 0; i < {this.state.movies.imdbID}.length; i++) {
              const item = {this.state.movies.imdbID}[i];
              content.push({item.imdbID});
            }
            return content;
          };

        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            getFilmsContent
            
            // data.movies.map(data)

            console.log(data);
        })
        .catch(error => {git add 
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