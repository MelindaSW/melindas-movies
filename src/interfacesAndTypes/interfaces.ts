export interface IFormState {
  Title: string;
  Year: string;
}

export type MovieTypeTitleSearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export interface IMovieByTitleResponse {
  Search: MovieTypeTitleSearch[];
  Response: string;
  totalResults: string;
}

export interface MovieType {
  imdbID: string;
  Title: string;
  Year: string;
  Plot: string;
  Poster: string;
}
export type MovieStateType = Array<MovieType>;

export type ErrorType = { Response: string; Error: string };
