import {createSlice} from '@reduxjs/toolkit';

export interface AppPrefsState {}

const initialState: AppPrefsState = {};

export const appPrefsSlice = createSlice({
  name: 'appPrefs',
  initialState,
  reducers: {},
});

export default appPrefsSlice.reducer;
