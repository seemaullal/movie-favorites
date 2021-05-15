import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
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
          <FavoriteMovies />
        </Route>
        <Route path="/favorites">
          <h2>Your faves</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
