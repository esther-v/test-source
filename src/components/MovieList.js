import React from 'react';
import data from '../data.json';
import MovieCard from './MovieCard';

const MovieList = () => {
  return(
    <>
      <div className='headerList'>
        <h2>Titles <span>({data.movie.length})</span></h2>
        <button className='delete'>Delete selection</button>
      </div>
      <div className='movieContainer'>
        {data.movie.map((item, index) => (
          <MovieCard item={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default MovieList;