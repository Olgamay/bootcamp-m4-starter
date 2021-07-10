import React, { Component } from 'react';
import './SearchBox.css';

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

        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b3520fc7')
        .then((response)=> {
            console.log(response)
            return response.json();
        })
        // .then((data) => {
        //     let
        // })
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
                        disabled={!searchLine} onClick={() => {this.getFilmFetch()}}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;