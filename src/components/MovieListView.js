import React from 'react';
import MovieListItem from './MovieListItem';

const MovieListView = ({ data }) => {
  return(
    <div className='movieListContainer'>
      <div className='listBar'>
        <input type='checkbox'></input>
        <p className='title'>Title</p>
        <p className='category'>Category</p>
        <p>Best quality</p>
      </div>
      <div>
        {data.movie.map((item, index) => (
          <MovieListItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default MovieListView;