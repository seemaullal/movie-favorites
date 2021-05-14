import { useState, useEffect } from "react";
import Movie from "./Movie";

export default function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFavorites, setCurrentFavorites] = useState([]);
  function addFavoriteMovie(movieId) {
    setCurrentFavorites((favorites) => [...favorites, movieId]);
  }

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(
      window.localStorage.getItem("favoritedMovies")
    );
    if (favoritesFromLocalStorage) {
      setCurrentFavorites(favoritesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (currentFavorites.length) {
      window.localStorage.setItem(
        "favoritedMovies",
        JSON.stringify(currentFavorites)
      );
    }
  }, [currentFavorites]);

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
      {currentFavorites.length >= 5 && (
        <h3>
          You have already favorited 5 movies. You can't favorite anymore :(
        </h3>
      )}
      <p>Search for movies and select your favorites!</p>
      <label htmlFor="movie-search" className="margin-right-10">
        Search for a movie
      </label>
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        id="movie-search"
      />
      {movies.map(({ imdbID, Title, Poster }) => (
        <Movie
          key={imdbID}
          title={Title}
          posterUrl={Poster}
          movieId={imdbID}
          disableFavoriting={currentFavorites.length >= 10}
          addFavoriteMovie={addFavoriteMovie}
          favorited={currentFavorites.includes(imdbID)}
        />
      ))}
    </div>
  );
}
