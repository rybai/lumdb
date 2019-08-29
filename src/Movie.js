import React, { useState, useEffect, useRef } from 'react';

const Movie = ({ movie }) => {
  return <div key={movie.id}>{movie.title}</div>;
};

export default Movie;
