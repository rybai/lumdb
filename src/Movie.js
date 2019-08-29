import React from 'react';
// Validate prop types
// Should ALWAYS have either a default prop OR an isRequired in the propTypes
// 👇👇👇
import PropTypes from 'prop-types';

const Movie = ({ movie, desc = 'Description not available' }) => {
  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <p>{desc}</p>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  desc: PropTypes.string
};

export default Movie;
