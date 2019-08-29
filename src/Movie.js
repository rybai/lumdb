import React from 'react';
import PropTypes from 'prop-types'; // Validate prop types

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

// Movie.defaultProps = {
//   desc: 'Description not available'
// };

export default Movie;
