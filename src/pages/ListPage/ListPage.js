import React, { Component } from 'react';
import './ListPage.css';
import Favorites from "../../components/Favorites/Favorites";

let result = [];
let imdbID = [];
let apikey = '1b6eef56';
// Почему не активен apikey, он подставляется внизу в ссылке ключ актуальный. 



class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        // console.log("888", 'https://acb-api.algoritmika.org/api/movies/list/' +id);
        // console.log("666", id)
        

        

        // TODO: запрос к сервер на получение списка
        fetch('https://acb-api.algoritmika.org/api/movies/list/' +id)
            .then(response => response.json())
            .then((data) => {                
                fetch('http://www.omdbapi.com/?i=${this.state.props.searchLine}&apikey=${apikey}')
                    .then(response => response.json())
                    .then(data => {
                        imdbID = {...data}
                        result.push(imdbID)
                        this.setState({movies: result})
                        console.log("77", data)
                }) 
                // this.state.searchLine это ссылка Favorites поэтому пропс




            // // фетч запрос к imdbID и цикл по шв

            // // фетч запрос к imdbID и цикл по шв
            //     console.log("id", data);
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
                                <a href={"https://www.imbd.com/title/" + item.imdbID} target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;