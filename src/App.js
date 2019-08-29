import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import tmdbAPI from './APIKey';

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'A space movie'
  },
  {
    id: 2,
    title: 'Spider Man'
  },
  {
    id: 3,
    title: 'The Avengers'
  }
];

function App() {
  // // const [toggle, setToggle] = useState(true);
  // const [input, setInput] = useState('Hello');

  // const submit = () => {
  //   console.log(textInput.current.value);
  // };

  // const handleTextChange = event => {
  //   setInput(event.target.value.trim());
  // };
  // const textInput = useRef(); // Uncontrolled input - no validation

  useEffect(async () => {}, []);
  console.log(tmdbAPI());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} desc={movie.desc} />
      ))}
      <h1></h1>
    </div>
  );
}

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
