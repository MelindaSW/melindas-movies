import './Moviecards.css';

import React, { FormEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

// interface IMovieCardProps {}

const MovieCards = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  return (
    <ul>
      {movies[0].Title != '' ? (
        movies.map((m, index) => (
          <li key={index}>
            <img src={m.Poster} alt="poster" />
            <div className="Movie-card-title">
              <span>{m.Title}</span>
            </div>
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};

export default MovieCards;
