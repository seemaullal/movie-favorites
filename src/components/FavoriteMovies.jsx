export default function MovieSearch({ favoriteMovies }) {
  return (
    <div className="App">
      {favoriteMovies.map((movieId) => (
        <div>{movieId}</div>
      ))}
    </div>
  );
}
