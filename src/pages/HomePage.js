import React from 'react';
import NavBar from '../components/NavBar';
import ActionBar from '../components/ActionBar';
import MovieList from '../components/MovieList';

const HomePage = () => (
  <>
    <NavBar/>
    <div className='container'>
      <ActionBar />
      <MovieList />
    </div>
    
  </>
)

export default HomePage;