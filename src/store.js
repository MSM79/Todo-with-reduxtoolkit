import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../src/futures/todoSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
