import React from 'react';
import { Poster, MovieContainer } from './style';
import Overdrive from 'react-overdrive';

// Validate prop types
// Should ALWAYS have either a default prop OR an isRequired in the propTypes
// 👇👇👇
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const posterPath = 'https://image.tmdb.org/t/p/w154';

const Movie = ({ movie, userMovieList, setUserMovieList }) => {
  const addMovie = () => {
    userMovieList.includes(movie)
      ? console.log('exists!')
      : setUserMovieList([...userMovieList, movie]);
    console.log(`Added ${movie.title} to context`);
  };

  const removeMovie = () => {
    userMovieList.includes(movie)
      ? setUserMovieList(
          [...userMovieList].filter(currentMovie => currentMovie != movie)
        )
      : console.log(`${movie.title} doesn't exist in userMovieList`);
    console.log(`Remove ${movie.title} from context`);
  };

  return (
    <MovieContainer>
      <Link to={`/${movie.id}`}>
        <Overdrive id={movie.id} duration={600}>
          <Poster src={`${posterPath}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
      </Link>
      <p className="addusermovie" onClick={addMovie}>
        ✔
      </p>
      <p className="removeusermovie" onClick={removeMovie}>
        ❌
      </p>
    </MovieContainer>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
