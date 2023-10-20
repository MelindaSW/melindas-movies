import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux/store';

export type Error = {
  error: boolean;
  message: string;
};

type NewErrorPayload = { error: boolean; message: string };

// Define a type for the slice state
interface ErrorState {
  error: Error;
}

// Define the initial state using that type
const initialState: ErrorState = {
  error: { error: false, message: '' },
};

export const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    updateError: (state, action: PayloadAction<NewErrorPayload>) => {
      console.log('new movie');
    },
  },
});

export const { updateError } = errorSlice.actions;

export const selectErrors = (state: RootState) => state.errors.error;

export default errorSlice.reducer;
