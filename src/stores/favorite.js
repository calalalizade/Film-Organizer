import { createSlice } from '@reduxjs/toolkit'

export const favorite = createSlice({
     name: 'favorite',
     initialState: {
         title: "My List",
         favorites: []
     },
     reducers: {
        addFavorites(state,action) {
            const isInList = state.favorites.findIndex(movie => movie.imdbID === action.payload.imdbID);

            if(isInList >= 0){
            }else{
                state.favorites.push(action.payload)
            }
        },

        removeFavorites(state,action) {
            const newList = state.favorites.filter(
                item => item.imdbID !== action.payload.imdbID
            )

            state.favorites = newList;
        },

        setNewTitle(state,action){
            state.title = action.payload
        }
     }
})

export const { addFavorites,removeFavorites,setNewTitle } = favorite.actions;
export default favorite.reducer;