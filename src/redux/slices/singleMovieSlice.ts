import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type Movie = {
  title: string;
  actors: string;
  country: string;
  director: string;
  writer: string;
  language: string;
  plot: string;
  poster: string;
  releasedate: string;
  genre: string;
  imdbid: string;
};

type NewMoviePayload = {
  movie: Movie;
};

// Define a type for the slice state
interface ErrorState {
  movie: Movie;
}

// Define the initial state using that type
const initialState: ErrorState = {
  movie: {
    title: '',
    actors: '',
    country: '',
    director: '',
    writer: '',
    language: '',
    plot: '',
    poster: '',
    releasedate: '',
    genre: '',
    imdbid: '',
  },
};

export const singleMovieSlice = createSlice({
  name: 'singleMovie',
  initialState,
  reducers: {
    updateSelectedMovie: (state, action: PayloadAction<NewMoviePayload>) => {
      state.movie = action.payload.movie;
    },
  },
});

export const { updateSelectedMovie } = singleMovieSlice.actions;

export const selectMovie = (state: RootState) => state.singleMovie;

export default singleMovieSlice.reducer;
