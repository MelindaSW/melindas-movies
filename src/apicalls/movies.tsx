const searchMovies = async (title: string, year: number) => {
  let moviesByTitle = {};
  try {
    const fetchMovies = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}?apikey=${
        import.meta.env.VITE_API_KEY
      }&t=Ant&plot=full`,
    );
    moviesByTitle = await fetchMovies.json();
    console.log(moviesByTitle);
    return moviesByTitle;
  } catch {
    console.error(moviesByTitle);
    return { errorMsg: moviesByTitle };
  }
};

export { searchMovies };
