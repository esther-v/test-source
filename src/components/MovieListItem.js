import React from 'react';

const MovieListItem = ({ item }) => {
  return(
    <div className='movieListItem'>
      <input type='checkbox'></input>
      <p className='title'>{item.title}</p>
      <p className='category cat'>{item.categories[0]}</p>
      <p>{item.bestQuality}</p>
    </div>
  )  
}

export default MovieListItem;