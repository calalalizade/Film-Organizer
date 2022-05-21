import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

import {useSelector} from 'react-redux';

function Movies() {

    const movies = useSelector((state) => state.searchData.movies);

    const movieList = movies.map((movie) =>(
            <li className="movies__item" key={movie.imdbID}>
                <MovieItem {...movie} />
            </li>
        )
    )

    return ( 
        <ul className="movies">
            {movieList}
        </ul>
    );
}
 

export default Movies;