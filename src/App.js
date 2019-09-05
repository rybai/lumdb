import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import UserMovies from './UserMovies';

const App = () => {
  const [userMovieList, setUserMovieList] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <UserMovies
          userMovieList={userMovieList}
          setUserMovieList={setUserMovieList}
        />
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

export default App;
