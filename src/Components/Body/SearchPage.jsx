import React from "react";
import Loading from "../Loading/Loading";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";


function SearchPage() {
  const dataSearched = useSelector((state) => state.counter.dataSearch);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full dark:bg-gray-900 bg-slate-50">
        <div className="flex justify-evenly py-5 pb-5 flex-wrap dark:bg-gray-900 bg-slate-50">
          {dataSearched.payload ? (
            dataSearched.payload.map((movie) => {
              return (
                <>
                  <div
                    className="w-64 h-full mx-5 my-5 bg-slate-100 dark:bg-gray-600 dark:border-gray-700 rounded-md"
                    key={movie.id}
                  >
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                      alt={movie.original_title}
                    />
                    <div className="my-3 ml-3 flex justify-between ">
                      <span className="w-2/4">{movie.original_title}</span>
                      <button
                        type="button"
                        className="mr-3 px-5 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={() => {
                          navigate(`/movie/${movie.id}`);
                        }}
                      >
                        <Link to={"/movie/" + movie.id}>More Details</Link>
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            // (<div className='h-screen w-full text-center'>
            //       <h1>Search Your Movie !</h1>
            // </div>
            // )
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
