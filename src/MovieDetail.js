import React, { useState, useEffect } from 'react';
import Overdrive from 'react-overdrive';
import { Poster, MovieWrapper, MovieInfo } from './style';
import tmdbAPI from './APIKey';

const posterPath = 'https://image.tmdb.org/t/p/w154';
const backdropPath = 'https://image.tmdb.org/t/p/w1280';

function MovieDetail({ match }) {
  const [movie, setMovieDetail] = useState({});

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const api = tmdbAPI();
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api}&language=en-US`
        );
        const movieDetail = await response.json();
        setMovieDetail(movieDetail);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovieDetail();
  }, []);

  return (
    <MovieWrapper
      backdrop={
        movie.backdrop_path
          ? `${backdropPath}${movie.backdrop_path}`
          : console.log('Movie detail not yet retrieved!')
      }
    >
      <MovieInfo>
        <Overdrive id={movie.id} duration={600}>
          <Poster src={`${posterPath}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
}

export default MovieDetail;

// TODO: Param validation on match.params.id
