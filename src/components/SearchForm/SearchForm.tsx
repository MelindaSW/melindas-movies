import './SearchForm.css';

import React, { FormEvent, useState } from 'react';

import { searchMoviesByID, searchMoviesByTitle } from '../../apicalls/moviesapi';
import { IFormState } from '../../interfacesAndTypes/interfaces';
import {
  MovieStateType,
  MovieTypeTitleSearch,
} from '../../interfacesAndTypes/interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { updateMovieList } from '../../redux/slices/movieSlice';

const SearchForm = () => {
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
  const [errorState, setErrorState] = useState({
    error: false,
    msg: '',
  });

  const [movies, setMovieState] = useState(initialMovieState);
  const [formState, setFormState] = useState<IFormState>(initialFormState);

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
    // setErrorState({ error: false, msg: '' }); // TODO: reducer for errors?
    setMovieState(initialMovieState);

    // const result = await searchMoviesByTitle(formState.Title, formState.Year);

    // console.log('form submitted ✅', 'Response: ', result);

    // if (result.Response === 'False') {
    //   setErrorState({
    //     error: true,
    //     msg: 'No movies were found, please try again with a different search condition',
    //   });
    // } else if (result.Response === 'True') {
    //   setMovieState(result.Search);
    // }
  };
  return (
    <form className="Search-container" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default SearchForm;
