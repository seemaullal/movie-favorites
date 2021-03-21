export default function Movie({ title, posterUrl }) {
  return (
    <div>
      <img alt="moviePoster" src={posterUrl} />
      <p>{title}</p>
    </div>
  );
}
