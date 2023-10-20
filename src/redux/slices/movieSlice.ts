import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux/store';

export type Movie = {
  imdbid: string;
  title: string;
  plot: string;
  year: string;
  actors: string;
};

type NewMovieListPayload = { movies: Movie[] };

// Define a type for the slice state
interface MovieState {
  movies: Movie[];
}

// Define the initial state using that type
const initialState: MovieState = {
  movies: [{ imdbid: '', title: '', plot: '', year: '', actors: '' }],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovieList: (state, action: PayloadAction<NewMovieListPayload>) => {
      console.log('new movie');
    },
  },
});

export const { updateMovieList } = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
