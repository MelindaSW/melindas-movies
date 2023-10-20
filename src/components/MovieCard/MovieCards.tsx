import './Moviecards.css';

import React, { FormEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

// interface IMovieCardProps {}

const MovieCards = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  return (
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
  );
};

export default MovieCards;
