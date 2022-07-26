import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'


export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  //Getting an error that below is not a function - not sure if it's from below, or from the props and how I'm trying to use it in the Movie.js
  const addToSavedList = movie => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if (saved)

      if (saved.includes(movie)) {
        console.log(`You've already saved this movie.`)
      }
      else (setSaved([...saved, movie]))
  }


  return (
    <div>
      <SavedList list={saved} />

      <Route exact path={`/`}>
        <MovieList movies={movieList} addToSavedList={addToSavedList} />
      </Route>
      <Route path={`/movies/:movieID`}>
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
}
