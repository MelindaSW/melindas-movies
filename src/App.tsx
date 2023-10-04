import './App.css';

import React, { useState } from 'react';

import { searchMovies } from './apicalls/movies';

function App() {
  const [movies, setMovies] = useState([
    {
      Title: 'Ant-Man',
      Year: '2015',
      imdbID: 'tt0478970',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg',
    },
    {
      Title: 'Ant-Man and the Wasp',
      Year: '2018',
      imdbID: 'tt5095030',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Ant-Man and the Wasp: Quantumania',
      Year: '2023',
      imdbID: 'tt10954600',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_SX300.jpg',
    },
    {
      Title: 'The Ant Bully',
      Year: '2006',
      imdbID: 'tt0429589',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjE2OTYwMzQzNl5BMl5BanBnXkFtZTcwNDM1MjMzMQ@@._V1_SX300.jpg',
    },
    {
      Title: 'A.N.T. Farm',
      Year: '2011–2014',
      imdbID: 'tt1772752',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMWMzN2UwNTktOWUyYi00ZGIxLTk0MTktMTJlYzA2NzllOGZjXkEyXkFqcGdeQXVyMTIwMjY0NjQz._V1_SX300.jpg',
    },
    {
      Title: 'The Atom Ant Show',
      Year: '1965–1968',
      imdbID: 'tt0058789',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BY2FmNjE2ZmEtOTZjZi00NTQ3LTk2ZGItMzFjZDQ1NjQxZDY2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
    },
    {
      Title: "Ant & Dec's Saturday Night Takeaway",
      Year: '2002–2023',
      imdbID: 'tt0324692',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BM2Q3MDVjNTItNWRlMS00NGMyLWJiZmUtMGU4YmUzMjI1OTUwXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_SX300.jpg',
    },
    {
      Title: 'The Ant and the Aardvark',
      Year: '1969–1972',
      imdbID: 'tt0064033',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc4NjkwMTQ0Ml5BMl5BanBnXkFtZTcwMTI1Mjg4NA@@._V1_SX300.jpg',
    },
    {
      Title: 'Dead Ant',
      Year: '2017',
      imdbID: 'tt5265898',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmIzZmQxMmMtYTk2Ni00NTg2LWI2YWQtZTAwMjNlMmRiNmM3XkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg',
    },
    {
      Title: 'The Journey of the Ant',
      Year: '1983',
      imdbID: 'tt0216126',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmM2ZDI3MDktOTE5Yi00ODczLTkwZTEtY2ZiYTYzNDhlNzA2XkEyXkFqcGdeQXVyNjMxODMyODU@._V1_SX300.jpg',
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <p className="header">
          <span className="star">&#9733;</span>Movie search
          <span className="star">&#9733;</span>
        </p>
      </header>
      <div className="body">
        <form className="Search-container">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Title" />
          <label htmlFor="year">Year</label>
          <input id="year" type="text" placeholder="Year" />
          <label htmlFor="description">Description length</label>
          <select name="description" id="description">
            <option value="short">Short</option>
            <option value="full">Full</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              searchMovies('Ant', 1986);
            }}
          >
            Search<span className="star">&#9733;</span>
          </button>
        </form>

        <div>
          <div className="Movie-card-container">
            <ul>
              {movies.map((m) => (
                <div className="Movie-card" key={m.imdbID}>
                  <li>
                    <img src={m.Poster} alt="poster" />
                    <p>{m.Title}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <p>Footer information lorem ipsum etc</p>
      </footer>
    </div>
  );
}

export default App;
