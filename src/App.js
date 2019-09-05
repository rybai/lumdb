import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import UserMovies from './UserMovies';

const App = () => {
  // // const [toggle, setToggle] = useState(true);
  // const [input, setInput] = useState('Hello');
  // eslint-disable-next-line comma-dangle

  // const submit = () => {
  //   console.log(textInput.current.value);
  // };

  // const handleTextChange = event => {
  //   setInput(event.target.value.trim());
  // };
  // const textInput = useRef(); // Uncontrolled input - no validation
  const [userMovieList, setUserMovieList] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <UserMovies userMovieList={userMovieList} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <MoviesList
                {...props}
                userMovieList={userMovieList}
                setUserMovieList={setUserMovieList}
              />
            )}
          />
          <Route path="/:id" component={MovieDetail} />
          {/* if URL includes /test display the component */}
        </Switch>
      </div>
    </Router>
  );
};
// * Match.params 👇👇👇 access the :id variable in Route Path
// * const Test = ({ match }) => <h1>{match.params.id}</h1>;

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
