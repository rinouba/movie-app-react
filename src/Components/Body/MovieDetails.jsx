import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from "../../imgs/vOX1Zng472PC2KnS0B9nRfM8aaZ.jpg"
import Loading from '../Loading/Loading'



function MovieDetails() {
  const {id} = useParams()
  const [data, setdata] = useState()
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjlkZThkNzc2ODY1Mzc4ZmU0MzljZjFjNGQzN2U5OCIsIm5iZiI6MTcyNzgwNjY4OC43MzEzMzQsInN1YiI6IjY2Zjk2YTI5N2YxM2I3YjEyYWEyNTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PW3I9G3ucPfEDKUOlLo61lo9KfRI7sDGaC_FDZCVDpg'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then(response => {
        setdata(response)
        setIsDataLoading(true)
        console.log(response)
      })
      .catch(err => console.error(err));
  
  }, [id])

  return (
    <>
    {isDataLoading?
      <div className='h-screen bg-slate-50  dark:bg-gray-900 pt-10 dark:text-white'>
      <div className='p-2 flex w-3/4 m-auto  dark:bg-slate-800 rounded border border-2 border-slate-600' >
      <div className='w-1/3 h-full'> 
        <img src={"https://image.tmdb.org/t/p/w500/"+data.poster_path} alt={data.original_title} />
      </div>
      <div className='ml-3 pl-3 w-2/3 border-l-4 border-slate-600'>
        <h1 className='text-6xl'>{data.original_title}</h1>
        <div>
          <h3 className='text-2xl dark:text-slate-300 mt-5 '>Overview</h3>
          <p className='mt-2'>{data.overview}</p>
        </div>
        <div className='flex mt-10 border-t-2 border-b-2 py-3 border-slate-600'>
          <div>Release Date : <br /> <span className='text-2xl dark:text-slate-300'>{data.release_date}</span> <br /> Vote Average : <br /> <span className='text-2xl dark:text-slate-300'>{data.vote_average}</span></div>
          <div className='ml-52'>Status : <br /> <span className='text-2xl dark:text-slate-300'>{data.status}</span> <br /> Language : <br /> <span className='text-2xl dark:text-slate-300'>{data.original_language}</span></div>
        </div>
      </div>
    </div>
  </div>:<Loading/>
    }
    </>
  )
}

export default MovieDetails