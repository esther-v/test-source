import React from 'react';
import NavBar from '../components/NavBar';
import MovieList from '../components/MovieList';

const HomePage = () => (
  <>
    <NavBar/>
    <div className='container'>
      <MovieList />
    </div>
  </>
)

export default HomePage;