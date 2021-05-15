import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MovieSearch from "./components/MovieSearch";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
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

  return (
    <BrowserRouter>
      <ul className="nav">
        <li>
          <Link to="/movies">Search for movies</Link>
        </li>
        <li>
          <Link to="/favorites">See your favorites</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/movies">
          <MovieSearch currentFavorites={currentFavorites} addFavoriteMovie={addFavoriteMovie}/>
        </Route>
        <Route path="/favorites">
          <FavoriteMovies favoriteMovies={currentFavorites}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
