import React, { Component } from 'react';
import './ListPage.css';
import Favorites from "../../components/Favorites/Favorites";

let result = [];
let imdbID = [];
let apikey = '1b6eef56';



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
                // console.log("636", data.movies)
                // let listMovies = [...this.state.movies];
                // listMovies.push(data.movies)
                // console.log("111", listMovies)
                // let list = listMovies

                
                // for(let i = 0; i < list.length; i++) {
                //     imdbID.push(list[i].imdbID)
                //     console.log("44", imdbID)
                // }
                
                fetch('http://www.omdbapi.com/?i=${this.state.searchLine}&apikey=${apikey}')
                    .then(response => response.json())
                    .then(data => {
                        imdbID = {...data}
                        result.push(imdbID)
                        this.setState({movies: result})
                        console.log("77", data)
                }) 
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