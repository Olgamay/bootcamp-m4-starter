import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
        // TODO: запрос к сервер на получение списка
        // fetch('https://acb-api.algoritmika.org/api/movies/list/:id=${}', {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
            
        //     // data.movies.map(data)
        //     // 1. Записать в локальный стейт идентификатор, который мы получили от алгоритмики
        //     this.setState({id:data.id})
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.log("Произошла ошибка")
        // })

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
                                {/* <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a> */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;