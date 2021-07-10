import React, { Component } from 'react';
import './SearchBox.css';

const apikey = 'd24afc9b';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    getFilmFetch() {
        // 1. Получаем данные из форм с помощью объекта FormData 
        // 2. Из этих данных выцепить только то, что находится в поле поиска
        fetch(`https://www.omdbapi.com/?s=man&apikey=${apikey}`)
        .then((response)=> {      
            return response.json();
        })
        .then(data => {
            console.log(data)
            // Вызываем метод, который вызовет работу reducer - dispatch()
        })
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