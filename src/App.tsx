import './App.css';

import React, { FormEvent, useState } from 'react';
import { Provider } from 'react-redux';

import { searchMoviesByID, searchMoviesByTitle } from './apicalls/moviesapi';
import Footer from './components/Footer/Footer';
import SearchForm from './components/SearchForm/SearchForm';
import { IFormState } from './interfacesAndTypes/interfaces';
import { MovieStateType, MovieTypeTitleSearch } from './interfacesAndTypes/interfaces';
import store from './redux/store';

function App() {
  const initialMovieState = [
    {
      Title: '',
      Year: '',
      imdbID: '',
      Type: '',
      Poster: '',
    },
  ];
  const initialFormState = { Title: '', Year: '' };

  const [movies, setMovieState] = useState(initialMovieState);
  const [formState, setFormState] = useState<IFormState>(initialFormState);
  const [errorState, setErrorState] = useState({
    error: false,
    msg: '',
  });

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const targetId = event.currentTarget.id;
    const currentTargetValue: string = event.currentTarget.value;
    setFormState({
      Title: targetId === 'title' ? currentTargetValue : formState.Title,
      Year: targetId === 'year' ? currentTargetValue : formState.Year,
    });
    console.log({ formState });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorState({ error: false, msg: '' });
    setMovieState(initialMovieState);

    const result = await searchMoviesByTitle(formState.Title, formState.Year);

    console.log('form submitted ✅', 'Response: ', result);

    if (result.Response === 'False') {
      setErrorState({
        error: true,
        msg: 'No movies were found, please try again with a different search condition',
      });
    } else if (result.Response === 'True') {
      setMovieState(result.Search);
    }
  };

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
          {/* <SearchForm submit={handleSubmit} change={handleOnChange} /> */}
          {/* <form className="Search-container" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="text"
            placeholder="Year"
            onChange={(e) => handleOnChange(e)}
          />
          <button type="submit">
            Search<span className="star">&#9733;</span>
          </button>
        </form> */}

          <div>
            <div className="Movie-card-container">
              <ul>
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
              </ul>
            </div>
          </div>
          {errorState.error && <div className="Error-message">{errorState.msg}</div>}
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
