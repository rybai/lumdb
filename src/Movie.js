import React from 'react';
// Validate prop types
// Should ALWAYS have either a default prop OR an isRequired in the propTypes
// 👇👇👇
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const posterPath = 'https://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <Link to={`/${movie.id}`}>
      <img src={`${posterPath}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
