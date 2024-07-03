import React from 'react';
import { Link } from 'react-router-dom';
import useTitleFormatter from './useTitleFormatter';

function MovieItem({ movie }) {
  const formattedTitle = useTitleFormatter(movie.title, 'titlecase');

  return (
    <div className="movie">
      <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
        <h2 style={{ color: "black" }}>{formattedTitle}</h2>
      </Link>
      <p style={{ color: "blue" }}>Release Year: {movie.year}</p>
      <img src={movie.cover} alt={movie.title} />
    </div>
  );
}

export default MovieItem;
