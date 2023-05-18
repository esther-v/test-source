import React from 'react';
import MovieCover2 from '../assets/movie-cover-2.jpg';

const MovieCard = ({ item }) => {
  return(
    <div className='movieCard'>
      <img src={MovieCover2} alt="movie cover"/>
      <input type="checkbox" className='checkInput'/>
      <h4>{item.title}</h4>
      {item.categories.length && 
        item.categories.map((cat, index) => (
          <p key={index} className='cat'>{cat}</p>
        ))}
    </div>
  ) 
}

export default MovieCard;