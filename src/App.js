import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import tmdbAPI from './APIKey';

function App() {
  // // const [toggle, setToggle] = useState(true);
  // const [input, setInput] = useState('Hello');
  // eslint-disable-next-line comma-dangle
  const [movies, setMovies] = useState([]);

  // const submit = () => {
  //   console.log(textInput.current.value);
  // };

  // const handleTextChange = event => {
  //   setInput(event.target.value.trim());
  // };
  // const textInput = useRef(); // Uncontrolled input - no validation

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// const movies = [
//   {
//     id: 1,
//     title: 'Star Wars',
//     desc: 'A space movie'
//   },
//   {
//     id: 2,
//     title: 'Spider Man'
//   },
//   {
//     id: 3,
//     title: 'The Avengers'
//   }
// ];
// function Welcome({ text }) {
//   return (
//     <div>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {text}
//       </a>
//     </div>
//   );
// }

export default App;
