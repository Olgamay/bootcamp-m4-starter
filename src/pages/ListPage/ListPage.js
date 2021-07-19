import React, { Component } from 'react';
import './ListPage.css';

const apikey = '46383995';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        imdbID: ""
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log('https://acb-api.algoritmika.org/api/movies/list/' +id);
        console.log(id)

        console.log(` http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=${apikey}`);
        console.log(id)

        // TODO: запрос к сервер на получение списка
        fetch('https://acb-api.algoritmika.org/api/movies/list/' +id)
            .then(response => response.json())
            .then(data => {
                fetch('https://acb-api.algoritmika.org/api/movies/list/' +imdbID)
                    .then(response => response.json())
                    .then(data => {
                        console.log("imdbID", data);
                    })
            // фетч запрос к imdbID и цикл по шв

            // фетч запрос к imdbID и цикл по шв
                console.log("id", data);
            })
            .catch(error => {
                console.log("Произошла ошибка");
            });
       
        // TODO: запросы к серверу по всем imdbID


    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="#" target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;