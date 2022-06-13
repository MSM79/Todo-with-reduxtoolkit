import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../src/futures/todoSlice';
import searchSlice from '../src/futures/SearchSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
    search: searchSlice,
  },
});
