import React from 'react';
import { Link } from 'react-router-dom'

import MovieCard from './MovieCard';

export default function MovieList(props) {
  const { movies } = props
  // console.log(movies)
  // The above gives an empty array + an array of the movies list but w/o the stars data
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { movie } = props;

  // console.log(movie.stars) This is undefined here
  // console.log(movie) gives the result intended but w/o stars in the data
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
