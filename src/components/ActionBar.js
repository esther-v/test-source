import React from 'react';
import GridView from '../assets/icon-grid.svg';
import ListView from '../assets/icon-list.svg';

const ActionBar = () => {
  const [ grid, setGrid ] = React.useState(true);
  const handleSetGrid = () => {
    setGrid(!grid);
  };
  return(
    <div className='actionBar'>
      <h1>Wishlist</h1>
      <div className='actions'>
        <input type='search'></input>
        <input type='select'></input>
        <button className='add'>Add a movie</button>
        <button onClick={handleSetGrid}><img src={GridView} alt='grid'/></button>
        <button><img src={ListView} alt='list'/></button>
      </div>
    </div>
  )
}

export default ActionBar;