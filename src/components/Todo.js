import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../futures/todoSlice';
import ShowTodo from '../components/showTodo';

import { shortid } from 'shortid';

function Todo() {
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const shortid = require('shortid');

  const todos = useSelector((state) => state.todo);

  let handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      name: e.target.todo.value,
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
  };

  const deleteHandle = (id) => {
    dispatch(removeTodo(id));
  };

  // const editHandle = (e) => {
  //   const updateTodo = {
  //     name: e.target.todo.value,
  //   };
  //   dispatch(editTodo(updateTodo));
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center w-full h-12 mt-3 mb-7">
        <input
          type="text"
          name="todo"
          placeholder="+"
          ref={inputRef}
          className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-br-none w-1/3"
        />
        <button
          type="submit"
          className="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold border-yellow-500 border-t border-b border-r"
        >
          Add
        </button>
      </form>
      <div className="flex flex-col items-center">
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ width: '720px' }}
            className="flex mt-4 justify-center bg-white h-12 items-center shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  w-1/3"
          >
            <ShowTodo todo={todo} />
            <button
              className="ml-2"
              onClick={() => {
                deleteHandle(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
