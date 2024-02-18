import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movie);
  return (
    movies &&
    <div className=' bg-black'>
      <div className='md:-mt-80 -mt-28 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies ={movies.popularMovies}/>
        <MovieList title={"Trending"} movies ={movies.trendingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;