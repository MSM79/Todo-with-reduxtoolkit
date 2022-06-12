import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../futures/todoSlice';

function ShowTodo({ todo }) {
  const [edit, setEdit] = useState(false);

  const dispatch = new useDispatch();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, name: e.target.edit.value }));
    setEdit(false);
  };
  const deleteHandle = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="flex w-full">
      {!edit ? (
        <p className="w-full">{todo.name}</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            type="text"
            name="edit"
            defaultValue={todo.name}
            className="w-full appearance-none focus:outline-none focus:shadow-outline"
          />
          <button type="submit" className="mr-2 bg-yellow-400 py-1 px-4 rounded">
            ok
          </button>
        </form>
      )}
      <div className="divide-x-2 divide-slate-400/25 flex">
        <button type="button" onClick={handleEdit} className="px-2">
          Edit
        </button>
        <button
          className="px-2"
          onClick={() => {
            deleteHandle(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ShowTodo;
