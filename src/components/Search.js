import React from 'react';
import { useDispatch } from 'react-redux';

import { changeValue } from '../futures/SearchSlice';

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeValue(e.target.value));
  };
  return (
    <form className="flex justify-center w-full mt-3 mb-7">
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
          onChange={handleSearch}
        />
      </div>
    </form>
  );
}

export default Search;
