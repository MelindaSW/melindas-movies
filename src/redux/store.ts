import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './slices/movieListSlice';
import singleMovieReducer from './slices/singleMovieSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    singleMovie: singleMovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
