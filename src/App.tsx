import './App.css';

import React, { useState } from 'react';
import { Provider } from 'react-redux';

import Footer from './components/Footer/Footer';
import SearchForm from './components/SearchForm/SearchForm';
import store from './redux/store';

function App() {
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
          <div>
            <div className="Movie-card-container">
              {/* <ul>
                {movies[0].Title != '' ? (
                  movies.map((m) => (
                    <div className="Movie-card" key={m.imdbID}>
                      <li>
                        <img src={m.Poster} alt="poster" />
                        <p className="Movie-card-title">{m.Title}</p>
                      </li>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </ul> */}
            </div>
          </div>
          {/* {errorState.error && <div className="Error-message">{errorState.msg}</div>} */}
          {/* TODO: Get error from error reducer state' */}

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
