import "./App.css";
import { useState, useEffect } from "react";

const sampleMovieList = [
  "The Matrix",
  "The Avengers",
  "Spider-Man: Homecoming",
  "Onward",
  "Fast & Furious Presents: Hobbs & Shaw",
  "The Lovebirds",
  "Wonder Woman",
  "Gladiator",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Aladdin",
];

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("useEffect running");
    setMovies(
      sampleMovieList.filter((movie) =>
        movie.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
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
      {movies.map((movie) => {
        return <div>{movie}</div>;
      })}
    </div>
  );
}

export default App;
