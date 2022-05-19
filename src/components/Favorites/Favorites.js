import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: '',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }

    titleChange(value){
        this.setState({
            title: value
        })
    }

    render() { 
        return (
            <div className="favorites">
                <input 
                    onChange={e => this.titleChange(e.target.value)} 
                    value={this.state.title} 
                    placeholder="Новый список" 
                    className="favorites__name" 
                />

                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li className='favorites__list-item' key={item.id}>{item.title} ({item.year})
                            <button>X</button>
                        </li>;
                    })}
                </ul>

                <button 
                    disabled={this.state.movies.length && this.state.title ? "" : "disabled"} 
                    type="button" 
                    className="favorites__save">
                        Сохранить список
                </button>
            </div>
        );
    }
}
 
export default Favorites;