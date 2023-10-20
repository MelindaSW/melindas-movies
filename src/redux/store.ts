import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './slices/movieListSlice';
import singleMovieReducer from './slices/singleMovieSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    singleMovie: singleMovieReducer,

    // tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
