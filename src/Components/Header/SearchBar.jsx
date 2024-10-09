import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../features/counterSlice";

function SearchBar() {
  const [search, setsearch] = useState();
  const dispatch = useDispatch();

  const searchApi = (search) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjlkZThkNzc2ODY1Mzc4ZmU0MzljZjFjNGQzN2U5OCIsIm5iZiI6MTcyNzkwMzM5MC4yMTE5MzEsInN1YiI6IjY2Zjk2YTI5N2YxM2I3YjEyYWEyNTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NbtbGnKDbdHMz5JN0v3qCWBDZp2H3CytKm6WVqKCJ8U",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(searchMovie({ payload: response.results })))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form className="max-w-md mx-auto grow my-5 md:my-0 w-full">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Your Movie .."
            required
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              searchApi(search);
            }}
          >
            <Link to="search">Search</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
