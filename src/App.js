import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMovieForm from './AddMovieForm';
import MovieDetails from './MovieDetails';
import initialMovies from './movies';
import MovieItem from './MovieItem';

function Home({ movieList, onAddMovie }) {
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddMovie = (newMovie) => {
    onAddMovie(newMovie);
    setShowAddMovieForm(false);
  };

  const toggleAddMovieForm = () => {
    setShowAddMovieForm(!showAddMovieForm);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movieList.filter((movie) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      movie.title.toLowerCase().includes(lowerCaseQuery) ||
      movie.year.toString().includes(lowerCaseQuery)
    );
  });

  return (
    <div>
      <h1>MOVIE LIST</h1>
      {showAddMovieForm && <AddMovieForm onAdd={handleAddMovie} />}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or year"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* Ensure the button is always positioned correctly */}
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <button className="add-movie-button" onClick={toggleAddMovieForm}>
          Add New Movie
        </button>
        <div className="movie-list">
          {filteredMovies.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [movieList, setMovieList] = useState(initialMovies);

  const handleAddMovie = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home movieList={movieList} onAddMovie={handleAddMovie} />}
      />
      <Route path="/movies/:title" element={<MovieDetails movieList={movieList} />} />
    </Routes>
  );
}

export default App;
