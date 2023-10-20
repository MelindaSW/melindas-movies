import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type NewMovieListPayload = { movies: Movie[] };

// Define a type for the slice state
interface MovieState {
  movies: Movie[];
}

// Define the initial state using that type
const initialState: MovieState = {
  movies: [{ Title: '', Year: '', imdbID: '', Type: '', Poster: '' }],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovieList: (state, action: PayloadAction<NewMovieListPayload>) => {
      state.movies = action.payload.movies;
      console.log('new movies incoming', { moviestate: state.movies });
    },
  },
});

export const { updateMovieList } = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;
