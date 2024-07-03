import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movieList }) => {
  const { title } = useParams();
  const movie = movieList.find(m => m.title === decodeURIComponent(title));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Release Year: {movie.year}</p>
      <img src={movie.cover} alt={movie.title} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
