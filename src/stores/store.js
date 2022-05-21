import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search'
import favoriteReducer from './favorite'

export default configureStore({
  reducer: {
    searchData: searchReducer,
    favoriteData: favoriteReducer,
  }
})