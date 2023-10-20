import { IMovieByIdResponse } from '../models/IMovieByIdResponse';
import { IMovieByTitleResponse } from '../models/IMovieByTitleResponse';

const searchMoviesByTitle = async (title: string, year: string) => {
  const moviesByTitle: IMovieByTitleResponse = {
    search: [{ title: '', year: '', imdbID: '', type: '', poster: '' }],
    response: '',
    errorMessage: '',
  };
  try {
    const fetchMovies = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${title}&y=${year}`,
    );
    const result = await fetchMovies.json();
    moviesByTitle.response = result.Response;
    moviesByTitle.search = result.Search;
    moviesByTitle.errorMessage = result.Error;
    console.log({ result });
    return moviesByTitle;
  } catch {
    console.error('Something went wrong');
  }
  return moviesByTitle;
};

const searchMovieByID = async (id: string): Promise<IMovieByIdResponse> => {
  const movieByID: IMovieByIdResponse = {
    response: '',
    errorMessage: '',
    actors: '',
    country: '',
    director: '',
    writer: '',
    language: '',
    plot: '',
    poster: '',
    releasedate: '',
    genre: '',
    imdbid: '',
  };
  try {
    const fetchMovies = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}?apikey=${
        import.meta.env.VITE_API_KEY
      }&i=${id}`,
    );
    const result = await fetchMovies.json();
    movieByID.response = result.Response;
    movieByID.errorMessage = result.ErrorMessage;
    movieByID.actors = result.Actors;
    movieByID.country = result.Country;
    movieByID.director = result.Director;
    movieByID.writer = result.Writer;
    movieByID.language = result.Language;
    movieByID.plot = result.Plot;
    movieByID.poster = result.Poster;
    movieByID.releasedate = result.Released;
    movieByID.genre = result.Genre;
    movieByID.imdbid = result.imdbID;
    return movieByID;
  } catch {
    console.error(movieByID);
  }
  return movieByID;
};

export { searchMovieByID, searchMoviesByTitle };
