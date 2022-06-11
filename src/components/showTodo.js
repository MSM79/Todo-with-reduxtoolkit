import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../futures/todoSlice';

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

  return (
    <div className="flex w-full">
      {!edit ? (
        <p className="w-full">{todo.name}</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex">
          <input type="text" name="edit" defaultValue={todo.name} className="w-full" />
          <button type="submit" className="mr-2">
            ok
          </button>
        </form>
      )}

      <button type="button" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}

export default ShowTodo;
