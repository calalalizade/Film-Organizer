import React, { Component } from 'react';
import './SearchBox.css';
import MovieItem from '../MovieItem/MovieItem';
import Movies from '../Movies/Movies';

class SearchBox extends Component {
    state = {
        searchLine: '',
        movies: []
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=3379adba&s=${this.state.searchLine}`)
        .then(res=>res.json())
        .then(data=>this.setState({movies: data.Search}))
    }

    

    render() {
        const { searchLine , movies } = this.state;

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
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
                <div>
                    {/* {movies.map((movie) => (
                        <li className="movies__item" key={movie.imdbID}>
                            <MovieItem {...movie} />
                        </li>
                    ))} */}

                    <Movies />
                </div>
            </div>
        );
    }
}
 
export default SearchBox;