import './App.css';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { searchMovieByID, searchMoviesByTitle } from './apicalls/moviesapi';
import Footer from './components/Footer/Footer';
import MovieCards from './components/MovieCard/MovieCards';
import SearchForm from './components/SearchForm/SearchForm';
import store from './redux/store';

function App() {
  // useEffect(() => {
  //   const movies = searchMoviesByTitle('Star', '');
  //   movies.then((res) => {
  //     console.log(res);
  //   });
  //   const moviebyid = searchMovieByID('tt0076759');
  //   moviebyid.then((res) => {
  //     console.log(res);
  //   });
  //   console.log(moviebyid);
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p className="header">
            <span className="star">&#9733;</span>Movie search
            <span className="star">&#9733;</span>
          </p>
        </header>
        <div className="body">
          <SearchForm />
          <MovieCards />
          {/* {errorState.error && <div className="Error-message">{errorState.msg}</div>} */}
          {/* TODO: Get error from error reducer state' */}

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
