export interface IMovieByTitle {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface IMovieByTitleResponse {
  search: IMovieByTitle[];
  response: string;
  errorMessage: string | null | undefined;
}

// {Search: Array(10), totalResults: '4374', Response: 'True'}
// Response
// :
// "True"
// Search
// :
// Array(10)
// 0
// :
// {Title: 'Star Wars: Episode IV - A New Hope', Year: '1977', imdbID: 'tt0076759', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOT…TU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg'}
// 1
// :
// {Title: 'Star Wars: Episode V - The Empire Strikes Back', Year: '1980', imdbID: 'tt0080684', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjND…TU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}
// 2
// :
// {Title: 'Star Wars: Episode VI - Return of the Jedi', Year: '1983', imdbID: 'tt0086190', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYz…Tk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'}
// 3
// :
// {Title: 'Star Wars: Episode VII - The Force Awakens', Year: '2015', imdbID: 'tt2488496', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'}
// 4
// :
// {Title: 'Star Wars: Episode I - The Phantom Menace', Year: '1999', imdbID: 'tt0120915', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNW…WI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'}
// 5
// :
// {Title: 'Star Wars: Episode III - Revenge of the Sith', Year: '2005', imdbID: 'tt0121766', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'}
// 6
// :
// {Title: 'Star Wars: Episode II - Attack of the Clones', Year: '2002', imdbID: 'tt0121765', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2…DVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'}
// 7
// :
// {Title: 'Rogue One: A Star Wars Story', Year: '2016', imdbID: 'tt3748528', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'}
// 8
// :
// {Title: 'Star Wars: Episode VIII - The Last Jedi', Year: '2017', imdbID: 'tt2527336', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'}
// 9
// :
// {Title: 'Star Trek', Year: '2009', imdbID: 'tt0796366', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg'}
// length
// :
// 10
// [[Prototype]]
// :
// Array(0)
// totalResults
// :
// "4374"
