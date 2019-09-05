import React from 'react';
import { Poster, MovieContainer, MovieGrid } from './style';
import Movie from './Movie';
import Overdrive from 'react-overdrive';

const UserMovies = ({ userMovieList, setUserMovieList }) => {
  return userMovieList.length > 0 ? (
    <MovieGrid>
      {userMovieList.map(movie => (
        <Movie
          key={movie.id}
          movie={movie}
          userMovieList={userMovieList}
          setUserMovieList={setUserMovieList}
        />
      ))}
    </MovieGrid>
  ) : null;
};

export default UserMovies;
