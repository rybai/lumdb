import React, { useState, useEffect } from 'react';
import { MovieGrid } from './style';
import Movie from './Movie';
import tmdbAPI from './APIKey';

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const api = tmdbAPI();
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        const movieList = await response.json();
        setMovies(movieList.results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieGrid>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
}

export default MoviesList;
