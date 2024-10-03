import React,{useState,useEffect} from "react";
import Loading from "../Loading/Loading"
import { useNavigate ,Link } from 'react-router-dom';

// https://image.tmdb.org/t/p/w500 to get image >
function MovieList() {
  const [data, setdata] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(false);
  const navigate = useNavigate(); 


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjlkZThkNzc2ODY1Mzc4ZmU0MzljZjFjNGQzN2U5OCIsIm5iZiI6MTcyNzgwNjY4OC43MzEzMzQsInN1YiI6IjY2Zjk2YTI5N2YxM2I3YjEyYWEyNTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PW3I9G3ucPfEDKUOlLo61lo9KfRI7sDGaC_FDZCVDpg'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(response => {
        setdata(response.results)
        setIsDataLoading(true)
      })
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className="w-full ">
        <div className="flex justify-evenly py-5 pb-5 flex-wrap dark:bg-gray-900 bg-slate-50">

          {isDataLoading?data.map((movie) => { 
              return(
                <>
                    <div className="w-3/12 h-3/4 mx-5 my-5 bg-slate-100 dark:bg-gray-600 dark:border-gray-700 rounded-md" key={movie.id}>
                        <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt={movie.original_title} />
                        <div className="my-3 ml-3 flex justify-between ">
                        <span className="w-2/4">{movie.original_title}</span>
                            <button
                            type="button"
                            class="mr-3 px-5 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={() => { navigate(`/movie/${movie.id}`) }}
                            >
                            <Link to={`/movie/${movie.id}`}>
                            More Details
                            </Link>
                            </button>
                        </div>
                    </div>
                </>
              )
            })
          :<Loading/>
          }
        </div>
    </div>
  );
}

export default MovieList;
