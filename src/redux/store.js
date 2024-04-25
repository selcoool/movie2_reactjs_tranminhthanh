import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieReducer'
import userReducer from './userReducer';

export const store = configureStore({
  reducer: {
    manageMovie: movieReducer,
    manageUser: userReducer, 

  },
})