import React from 'react';
import './ListPage.css';

import {useSelector} from "react-redux"


function ListPage(props) {
    const favs = useSelector((state) => state.favoriteData.favorites);
    const savedTitle = useSelector((state) => state.favoriteData.title)

    return (
        <div className="list-page">
            <h1 className="list-page__title">{savedTitle}</h1>
            <ul>
                {favs.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <img className="fav__poster" src={item.Poster} />
                            <a className="underline" href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
 
export default ListPage;