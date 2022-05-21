import React from 'react';
import './SearchBox.css';

import {useSelector , useDispatch} from 'react-redux';
import {fetchMovies} from "../../stores/search"
 

function SearchBox() {
    const [searchLine , setSearchLine] = React.useState("")

    const dispatch = useDispatch();

    const searchLineChangeHandler = (e) => {
        setSearchLine(prev => e.target.value)
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=3379adba&s=${searchLine}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.Response === "False"){
                alert("Movie Not Found!")
            }
            dispatch(fetchMovies(data.Search))
        })
    }


    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
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
        </div>
    );
}
 
export default SearchBox;