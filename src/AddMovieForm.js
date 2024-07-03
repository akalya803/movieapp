// AddMovieForm.js
import React, { useState } from 'react';

const AddMovieForm = ({ onAdd }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    year: '',
    cover: '',
    descriptive:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: formValues.title,
      year: parseInt(formValues.year),
      cover: formValues.cover
    };
    onAdd(newMovie);
    setFormValues({
      title: '',
      year: '',
      cover: '',
      descriptive:''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={formValues.title}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Release Year"
        value={formValues.year}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="cover"
        placeholder="Cover Image URL"
        value={formValues.cover}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;

