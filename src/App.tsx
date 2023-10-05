import './App.css';

import React, { FormEvent, useState } from 'react';

import { searchMoviesByID, searchMoviesByTitle } from './apicalls/moviesapi';
import { IFormState } from './interfacesAndTypes/interfaces';
import { MovieStateType, MovieTypeTitleSearch } from './interfacesAndTypes/interfaces';

function App() {
  const [movies, setMovies] = useState([
    {
      Title: '',
      Year: '',
      imdbID: '',
      Type: '',
      Poster: '',
    },
  ]);
  const [formState, setFormState] = useState<IFormState>({ Title: 'Sta', Year: '' });
  const [errorState, setErrorState] = useState({
    error: false,
    msg: 'Something went wrong, please try again.',
  });

  // const handleFormState = (event: FormEvent<HTMLFormElement>) => {
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Search movies
    const result = await searchMoviesByTitle(formState.Title, formState.Year);

    console.log('form submitted ✅', 'Response: ', result);

    if (result.Response === 'False') {
      setErrorState({
        error: true,
        msg: 'Something went wrong, please try again with another search condition',
      });
    } else if (result.Response === 'True') {
      setMovies(result.Search);
    }
  };
  // check if response is false or true
  // if true - update moviestate
  // if false - display error message

  return (
    <div className="App">
      <header className="App-header">
        <p className="header">
          <span className="star">&#9733;</span>Movie search
          <span className="star">&#9733;</span>
        </p>
      </header>
      <div className="body">
        <form className="Search-container" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Title" />
          <label htmlFor="year">Year</label>
          <input id="year" type="text" placeholder="Year" />
          <label htmlFor="description">Description length</label>
          <button type="submit">
            Search<span className="star">&#9733;</span>
          </button>
        </form>

        <div>
          <div className="Movie-card-container">
            <ul>
              {movies[0].Title != '' ? (
                movies.map((m) => (
                  <div className="Movie-card" key={m.imdbID}>
                    <li>
                      <img src={m.Poster} alt="poster" />
                      <p>{m.Title}</p>
                    </li>
                  </div>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        {errorState.error && <div className="Error-message">{errorState.msg}</div>}
        <footer>
          <p>
            Movie search is made with React and Vite, using the{' '}
            <a href="http://www.omdbapi.com/">OMDB API</a> . The source code can be found{' '}
            <a href="https://github.com/MelindaSW/melindas-movies">here</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
