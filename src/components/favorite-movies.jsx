import { useState, useEffect } from "react";
import Movie from "./movie";

export default function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      // In the future, handle pagination.
      fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=a3e71b30`
      )
        .then((result) => {
          return result.json();
        })
        .then((movies) => {
          if (movies.Search) {
            setMovies(movies.Search);
          }
        });
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <h2>Movie favorites</h2>
      <p>Search for movies and select your favorites!</p>
      <label htmlFor="movie-search" className="margin-right-10">
        Search for a movie
      </label>
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        id="movie-search"
      />
      {movies.map((movie) => (
        <Movie title={movie.Title} posterUrl={movie.Poster} />
      ))}
    </div>
  );
}
