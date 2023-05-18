import React from 'react';
import MovieCard from './MovieCard';

const MovieGridView = ({ data }) => {
  return(
    <div className='movieGridContainer'>
      {data.movie.map((item, index) => (
        <MovieCard item={item} key={index} />
      ))}
    </div> 
  )
}

export default MovieGridView;