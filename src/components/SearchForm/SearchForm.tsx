import './SearchForm.css';

import React, { FormEvent, useState } from 'react';

import { searchMoviesByTitle } from '../../apicalls/moviesapi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateMovieList } from '../../redux/slices/movieListSlice';

const SearchForm = () => {
  const initialFormState = { Title: '', Year: '' };
  const [formState, setFormState] = useState(initialFormState);
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);

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

    const result = await searchMoviesByTitle(formState.Title, formState.Year).then(
      (res) => res,
    );
    if (result.response === 'True') {
      console.log(result);
      const payload = { movies: result.search };
      dispatch(updateMovieList(payload));
      console.log({ statemovies: movies });
    } else {
      console.error({ msg: result.errorMessage, res: result.response, result });
    }
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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
