import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux/store';

// Define a type for the slice state
interface MovieState {
  movies: Movie[];
}

// Define the initial state using that type
const initialState: MovieState = {
  movies,
};
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovieList: (state, action: PayloadAction<NewMovieListPayload>) => {},
  },
  // `createSlice` will infer the state type from the `initialState` argument
  //   initialState,
  //   reducers: {
  //     addNewTask: (state, action: PayloadAction<NewTaskPayload>) => {
  //       const currentDate = new Date();

  //       const newTask = {
  //         id: state.tasks.length + Math.random(),
  //         title: action.payload.title,
  //         description: action.payload.description,
  //         deadline: incrementDays(currentDate, action.payload.incrementDays),
  //         created: currentDate,
  //         completed: false,
  //         overdue: false,
  //       };

  //       state.tasks.push(newTask);
  //     },
});

export const {
  //   addNewTask,
  //   markTaskAsDone,
  //   deleteTask,
  //   setIsOverdue,
  //   clearSorting,
  //   sortByDone,
  //   sortByTitle,
  //   sortByOverdue,
  //   sortByCreationDate,
  updateMovieList,
} = movieSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default movieSlice.reducer;
