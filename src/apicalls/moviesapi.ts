import { IMovieByTitleResponse } from '../interfacesAndTypes/interfaces';

const searchMoviesByTitle = async (
  title: string,
  year: string,
): Promise<IMovieByTitleResponse> => {
  let moviesByTitle: IMovieByTitleResponse = {
    Search: [{ Title: '', Year: '', imdbID: '', Type: '', Poster: '' }],
    totalResults: '',
    Response: 'False',
  };
  try {
    const fetchMovies = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${title}&y=${year}`,
    );
    moviesByTitle = await fetchMovies.json();
    console.log(moviesByTitle);
    return moviesByTitle;
  } catch {
    console.error('Something went wrong');
  }
  return moviesByTitle;
};

const searchMoviesByID = async (id: string) => {
  let moviesByID = [{}];
  try {
    const fetchMovies = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}?apikey=${
        import.meta.env.VITE_API_KEY
      }&i=${id}`,
    );
    moviesByID = await fetchMovies.json();
    console.log(moviesByID);
    return moviesByID;
  } catch {
    console.error(moviesByID);
  }
};

export { searchMoviesByID, searchMoviesByTitle };

// {
//   "Search": [
//       {
//           "Title": "Reign of Judges: Title of Liberty - Concept Short",
//           "Year": "2018",
//           "imdbID": "tt4275958",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg"
//       },
//       {
//           "Title": "Spider-Man Title Reveal",
//           "Year": "2021",
//           "imdbID": "tt14122734",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
//       },
//       {
//           "Title": "Don't Worry, We'll Think of a Title",
//           "Year": "1966",
//           "imdbID": "tt0060332",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BYzliMjU1MGQtN2VjZC00YmIzLWE4Y2UtOGZkNmM1OWY0ODkwXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
//       },
//       {
//           "Title": "No Time to Die: Official Title Reveal of Bond 25",
//           "Year": "2019",
//           "imdbID": "tt10839440",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BZjA3ZjhiODUtN2QxYy00MzlhLWFlYzYtZTg1ODQ2YjM0YjY3XkEyXkFqcGdeQXVyMzM3ODE4MzY@._V1_SX300.jpg"
//       },
//       {
//           "Title": "Power Slap: Road to the Title",
//           "Year": "2023–",
//           "imdbID": "tt25697028",
//           "Type": "series",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BNTE5NDA1YjgtMjM2Yi00YWM1LWE0OGEtZDBkZTkxYjhjYzg0XkEyXkFqcGdeQXVyMTUyMjEyMjMx._V1_SX300.jpg"
//       },
//       {
//           "Title": "Film Title Poem",
//           "Year": "2016",
//           "imdbID": "tt6947176",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BNTljYTkzMTYtZmZmMy00OGU1LTk0ODQtNWI4MzQ2MjZhMTg5XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg"
//       },
//       {
//           "Title": "Name Above Title",
//           "Year": "2020",
//           "imdbID": "tt11263640",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BMTIxYWNlZDAtYzQ2NS00Mjg0LWE3MGUtY2FmNDM2NTFmMGNhXkEyXkFqcGdeQXVyNDQ2MTEzNA@@._V1_SX300.jpg"
//       },
//       {
//           "Title": "Working Title",
//           "Year": "1992",
//           "imdbID": "tt0250823",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMDQwMjAwMDBeQTJeQWpwZ15BbWU3MDc4NTAyNTc@._V1_SX300.jpg"
//       },
//       {
//           "Title": "UFC 18: Road to the Heavyweight Title",
//           "Year": "1999",
//           "imdbID": "tt0483513",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BZjI2N2UyMDctOTYwZi00ZjYwLWFjOTItZjIwN2Q5ZWYwYzY0XkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_SX300.jpg"
//       },
//       {
//           "Title": "The Making of 'Working Title'",
//           "Year": "1992",
//           "imdbID": "tt2288099",
//           "Type": "movie",
//           "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MjI1NzQ0NF5BMl5BanBnXkFtZTcwODg1MDI1Nw@@._V1_SX300.jpg"
//       }
//   ],
//   "totalResults": "224",
//   "Response": "True"
// }
