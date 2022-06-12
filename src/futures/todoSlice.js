import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },
    editTodo: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].name = action.payload.name;
        }
      }
    },
    searchTodo: (state, action) => {
      return state.name.filter((x) => x.name === action.payload.name);
    },
  },
});
export const { addTodo, removeTodo, editTodo, searchTodo } = todoSlice.actions;
export default todoSlice.reducer;
