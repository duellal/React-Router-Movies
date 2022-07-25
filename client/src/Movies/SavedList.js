import React from 'react';
import { Link } from 'react-router-dom'

export default function SavedList(props) {
  const { list } = props

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to={`/`}>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
