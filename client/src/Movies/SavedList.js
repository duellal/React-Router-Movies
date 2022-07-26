import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function SavedList(props) {
  const { list } = props

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <NavLink className="saved-movie" to={`/movies/${movie.id}`} > {movie.title}</NavLink>
      ))
      }
      <Link to={`/`}>
        <button className="home-button">Home</button>
      </Link>
    </div >
  );
}
