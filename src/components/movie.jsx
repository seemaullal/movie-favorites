export default function Movie({ title, posterUrl }) {
  return (
    <div>
      {title}
      <img alt="moviePoster" src={posterUrl} />
    </div>
  );
}
