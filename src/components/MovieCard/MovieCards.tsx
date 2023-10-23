/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Moviecards.css';

import React, { FormEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Modal from '../Modal/Modal';

// interface IMovieCardProps {}

const MovieCards = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);
  const [showMovieDetails, setShowMovieDetails] = useState(false);

  const handleOnClick = () => {
    setShowMovieDetails(true);
    console.log(showMovieDetails);
  };

  return (
    <>
      <ul>
        {movies[0].Title != '' ? (
          movies.map((m, index) => (
            <li key={index}>
              <button className="imagebutton" onClick={handleOnClick}>
                <img src={m.Poster} alt="poster" />
              </button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <Modal
        isOpen={showMovieDetails}
        hasCloseBtn={true}
        onClose={() => {
          console.log('closing modal');
          setShowMovieDetails(false);
        }}
      >
        <div>testing content</div>
      </Modal>
    </>
  );
};

export default MovieCards;
