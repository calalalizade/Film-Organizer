import { createSlice } from '@reduxjs/toolkit'

export const search = createSlice({
     name: 'search',
     initialState: {
         movies: []
     },
     reducers: {
         fetchMovies: (state,action) => {
             state.movies = action.payload;
         }
     }
})

export const { fetchMovies } = search.actions;
export default search.reducer;