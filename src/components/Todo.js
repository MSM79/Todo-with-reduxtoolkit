import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../futures/todoSlice';
import ShowTodo from '../components/showTodo';
import Search from '../components/Search';

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

  // const editHandle = (e) => {
  //   const updateTodo = {
  //     name: e.target.todo.value,
  //   };
  //   dispatch(editTodo(updateTodo));
  // };

  return (
    <div>
      {/* Add Todo */}
      <form onSubmit={handleSubmit} className="flex justify-center w-full h-12 mt-3 mb-7">
        <input
          type="text"
          name="todo"
          placeholder="+"
          ref={inputRef}
          className="block p-4 border-r-0 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border focus:outline-none focus:shadow-outline rounded-r-none w-1/3 py-6"
        />
        <button
          type="submit"
          className="px-8 py-6 flex justify-center items-center rounded-r-lg bg-yellow-400 text-gray-800 font-bold border-yellow-500 border-t border-b border-r"
        >
          Add
        </button>
      </form>

      <Search />

      {/* Show TODO */}
      <div className="flex flex-col items-center">
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ width: '715px' }}
            className="flex mt-4 justify-center bg-white h-12 items-center shadow appearance-none rounded-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/3"
          >
            <ShowTodo todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
