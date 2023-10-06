import './SearchForm.css';

import React, { FormEvent, useState } from 'react';

const SearchForm = (submit: () => void, change: () => void) => {
  return (
    <form className="Search-container" onSubmit={submit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" placeholder="Title" onChange={(e) => change} />
      <label htmlFor="year">Year</label>
      <input id="year" type="text" placeholder="Year" onChange={(e) => change} />
      <button type="submit">
        Search<span className="star">&#9733;</span>
      </button>
    </form>
  );
};

export default SearchForm;
