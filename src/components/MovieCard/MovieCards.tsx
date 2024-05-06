/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Moviecards.css';

import React, { useEffect, useState } from 'react';

import { searchMovieByID } from '../../apicalls/moviesapi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMovie } from '../../redux/slices/singleMovieSlice';
import Modal from '../Modal/Modal';
import ModalContent from '../ModalContent/ModalContent';

const MovieCards = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);
  const singleMovie = useAppSelector((state) => state.singleMovie.movie);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [modalContentProps, setModalContentProps] = useState({
    title: '',
    poster: '',
    plot: '',
    releasedate: '',
    director: '',
    country: '',
    actors: '',
    language: '',
  });

  useEffect(() => {
    if (showMovieDetails) {
      setModalContentProps({
        title: singleMovie.title,
        poster: singleMovie.poster,
        plot: singleMovie.plot,
        releasedate: singleMovie.releasedate,
        director: singleMovie.director,
        country: singleMovie.country,
        actors: singleMovie.actors,
        language: singleMovie.language,
      });
    }
  }, [showMovieDetails]);

  const handleOnClick = async (index: number) => {
    const movieByID = await searchMovieByID(movies[index].imdbID);
    const payload = {
      movie: {
        title: movieByID.title,
        actors: movieByID.actors,
        country: movieByID.country,
        director: movieByID.director,
        writer: movieByID.writer,
        language: movieByID.language,
        plot: movieByID.plot,
        poster: movieByID.poster,
        releasedate: movieByID.releasedate,
        genre: movieByID.genre,
        imdbid: movieByID.imdbid,
      },
    };
    dispatch(setMovie(payload));
    setShowMovieDetails(true);
  };

  const handleOnClose = () => {
    setModalContentProps({
      title: '',
      poster: '',
      plot: '',
      releasedate: '',
      director: '',
      country: '',
      actors: '',
      language: '',
    });
    setShowMovieDetails(false);
  };

  return (
    <>
      <ul className="movielist">
        {movies[0].Title != '' ? (
          movies.map((m, index) => (
            <li className="listitem" key={index}>
              <button className="imagebutton" onClick={() => handleOnClick(index)}>
                <img src={m.Poster} alt="poster" />
              </button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
      <Modal isOpen={showMovieDetails} hasCloseBtn={true} onClose={handleOnClose}>
        <ModalContent {...modalContentProps} />
      </Modal>
    </>
  );
};

export default MovieCards;
