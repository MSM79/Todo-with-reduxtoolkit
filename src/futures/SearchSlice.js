import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      return action.payload;
    },
  },
});
export const { changeValue } = SearchSlice.actions;
export default SearchSlice.reducer;
