import React from 'react';
import data from '../data.json';
import GridView from '../assets/icon-grid.svg';
import MovieGridView from './MovieGridView';
import MovieListView from './MovieListView';

const MovieList = () => {
  const [ grid, setGrid ] = React.useState(true);
  const handleSetGrid = () => {
    setGrid(!grid);
  };
  return(
    <>
      <div className='actionBar'>
      <h1>Wishlist</h1>
      <div className='actions'>
        <input type='search'></input>
        <button className='select'>Recently added</button>
        <button className='add'>Add a movie</button>
        <button onClick={handleSetGrid}><img src={GridView} alt='grid'/></button>
      </div>
      </div>
      <div className='headerList'>
        <h2>Titles <span>({data.movie.length})</span></h2>
        <button className='delete'>Delete selection</button>
      </div>
      {grid ? <MovieGridView data={data} />
      : <MovieListView data={data} />}
    </>
  )
}

export default MovieList;