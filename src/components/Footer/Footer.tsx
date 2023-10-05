import './Footer.css';

import React, { FormEvent, useState } from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        Movie search is made with React and Vite, using the{' '}
        <a href="http://www.omdbapi.com/">OMDB API</a> . The source code can be found{' '}
        <a href="https://github.com/MelindaSW/melindas-movies">here</a>.
      </p>
    </footer>
  );
};

export default Footer;
