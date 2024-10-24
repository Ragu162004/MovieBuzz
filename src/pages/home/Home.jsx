import React from 'react';
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import GenreMovies from './genreMovie/GenreMovie';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <GenreMovies/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home