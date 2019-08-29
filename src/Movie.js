import React from 'react';
// Validate prop types
// Should ALWAYS have either a default prop OR an isRequired in the propTypes
// 👇👇👇
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
