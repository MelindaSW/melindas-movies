import './ModalContent.css';

import React from 'react';

interface IModalContentProps {
  title: string;
  poster: string;
  plot: string;
  releasedate: string;
  director: string;
  country: string;
  actors: string;
  language: string;
}

const ModalContent = (props: IModalContentProps) => {
  return (
    <div className="contentcontainer">
      <img className="modalposter" src={props.poster} alt="movieposter" />
      <div className="infocontainer">
        <h1>{props.title}</h1>
        <p>{props.plot}</p>
        <p className="modallist">
          <span>Actors: {props.actors}</span>
          <span>Released: {props.releasedate}</span>
          <span>Director: {props.director}</span>
          <span>Country: {props.country}</span>
          <span>Language: {props.language}</span>
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
