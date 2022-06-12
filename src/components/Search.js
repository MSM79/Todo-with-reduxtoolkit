import React from 'react';
import { useDispatch } from 'react-redux';

import { searchTodo } from '../futures/todoSlice';

function Search() {
  const dispatch = new useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTodo({ name: e.target.search.value }));
  };
  return (
    <form className="flex justify-center w-full mt-3 mb-7" onSubmit={handleSubmit}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div class="relative " style={{ width: '713px' }}>
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border focus:outline-none focus:shadow-outline"
          placeholder="Search Tasks ..."
          name="search"
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-gray hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
