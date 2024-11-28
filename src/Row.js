import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./row.css"

const base_URL = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData()
  }, [fetchUrl]);
  // console.table(movies)
  return (
    <div className="row">
        <h2>{title}</h2>
        {/* posters */}
        <div className='row_posters'> 
          {/* coontainer -> posters */}
          {movies.map(movie => (
            <img 
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterlarge"}`}
            src={`${base_URL}${ isLargeRow ?  movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
          ))}
        </div>
    </div>
  )
}
export default Row