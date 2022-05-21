import React from 'react';
import './MovieItem.css';

import {useSelector ,useDispatch} from 'react-redux';
import {addFavorites} from "../../stores/favorite"

function MovieItem(props) {
    const { Title, Year, Poster , imdbID } = props;

    const dispatch = useDispatch();

    const favs = useSelector((state) => state.favoriteData.favorites);

    function addToFavorites(){
        fetch(`http://www.omdbapi.com/?apikey=3379adba&i=${imdbID}`)
        .then(res=>res.json())
        .then(data=> dispatch(addFavorites(data)))
    }


    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button onClick = {addToFavorites} type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
    );
}
 
export default MovieItem;