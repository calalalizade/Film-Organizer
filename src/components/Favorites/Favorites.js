import React from 'react';
import './Favorites.css';

import {useSelector ,useDispatch} from 'react-redux';
import {removeFavorites,setNewTitle} from "../../stores/favorite"
import { NavLink } from 'react-router-dom';

function Favorites() {
    const [title, setTitle] = React.useState("");
    const [change, setChange] = React.useState(true);
    const movies = useSelector((state) => state.favoriteData.favorites);

    const dispatch = useDispatch();

    function titleChange(value){
        setTitle(prev=>(value))
    }

    return (
        <div className="favorites">
            <input 
                onChange={e => titleChange(e.target.value)} 
                value={title} 
                placeholder="Новый список" 
                className="favorites__name" 
            />

            <ul className="favorites__list">
                {movies.map((item) => {
                    return <li className='favorites__list-item' key={item.Title}>{item.Title} ({item.Year})
                        <button disabled={!change && "disabled"} onClick={() => dispatch(removeFavorites(item))}>X</button>
                    </li>;
                })}
            </ul>

            {change ? <button
                onClick={() => {
                    setChange(prev => !prev)
                    dispatch(setNewTitle(title))
                }} 
                disabled={movies.length && title ? "" : "disabled"} 
                type="button" 
                className="favorites__save">
                    Сохранить список
                </button>
                :
                <NavLink to={`/list`} className='favorites__goto'>Перейти к списку</NavLink>
            }
            
        </div>
    );
}
 
export default Favorites;