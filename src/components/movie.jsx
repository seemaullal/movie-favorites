export default function Movie({ title, posterUrl }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
        justifyContent: "center",
      }}
    >
      <div className="grid-item">
        <img
          alt="moviePoster"
          width={300}
          height={455}
          src={
            posterUrl !== "N/A"
              ? posterUrl
              : "https://www.popcorn.app/assets/app/images/placeholder-movieimage.png"
          }
        />
      </div>
      <div className="grid-item">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1 fr 1fr 1fr",
            gridTemplateRows: "auto",
          }}
        >
          <p style={{ justifySelf: "center" }}>{title}</p>
          <button
            onClick={() => console.log("favorited!")}
            className="favorite-button"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
}
