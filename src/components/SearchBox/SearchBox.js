import React, { Component } from 'react';
import './SearchBox.css';
import store from '../../redux/store';
import {add, refresh} from '../Action/Action';

const apikey = '1b6eef56';

class SearchBox extends Component {
    state = {
        searchLine: '',
        type: add,
        movieIdToFilm: 'poster'
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    getFilmFetch = (e) => {
        // 1. Получаем данные из форм с помощью объекта FormData 
        // 2. Из этих данных выцепить только то, что находится в поле поиска

        // здесь в запросе у тебя ошибка, поэтому не работает поиск по фильмам
        fetch(`http://www.omdbapi.com/?i=${this.state.searchLine}&apikey=${apikey}`)
        .then((response)=> {      
            return response.json();
        })
        .then(data => {
            console.log(data) 
            store.dispatch ({
                type: refresh,
                movies: data
            })            
                       // Вызываем метод, который вызовет работу reducer - dispatch()
        })
        e.preventDefault();
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler} 
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine} onClick={this.getFilmFetch}  
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;