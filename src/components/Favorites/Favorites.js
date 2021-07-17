import React, { Component } from 'react';
import store from '../../redux/store';
import './Favorites.css';
import {refresh} from '../Action/Action';
import {Link} from "react-router-dom"


class Favorites extends Component {
    // constructor() {
    //     this.
    // }
    state = {
        title: 'Новый список',
        movies: [
            // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 },
            // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 },
            // { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ],
        id: "",
        button: "Сохранить список"
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


    postMoviesList = () => {
        let data = {
            title: "",
            movies: [],
            
        };

        // перебираем массив id фильмов из локального стейта и
        // записываем в data.movies
        let content = [];
        for (let i = 0; i < this.state.movies.length; i++) {
            let item = this.state.movies[i];
            content.push(item.imdbID);
        }
        console.log('-----', content)
        
        // Массив imdbID из переменной content подставить в data.movies   
        data.movies = content;
        // В data.title записываем название списка фильмов
        data.title = this.state.title

        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            
            // data.movies.map(data)
            // 1. Записать в локальный стейт идентификатор, который мы получили от алгоритмики
            this.setState({id:data.id})
            console.log(data);
        })
        .catch(error => {
            console.log("Произошла ошибка")
        })
    }

        // getIdButton () => {
        //     if (id === NaN) {
        //         this.state.botton = "Сохранить список"
        //     } else {
        //         this.state.botton = "Перейти к списку"
        //         <Link>

        //         </Link>
               
        //     }        
        // }

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
                {/* Добавить условие отображения кнопок */}
                {this.state.id
                    ? <Link to="/Link/:id=${}1b93705d-9bb8-498f-a156-a305a387a391">Перейти к списку</Link>
                    : <button type="button" className="favorites__save" onClick={this.postMoviesList}>{this.state.button}</button>
                }
                
                {/* Если мы получили id, то есть он есть в стейете, то мы отображаем ссылку с текстом "Перейти к списку" (ссылка с помощью компонента <Link>) */}

            </div>
        );
    }
}
 
export default Favorites;