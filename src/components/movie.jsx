import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Movie({ title, posterUrl, movieId, disableFavoriting }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const currentFavorites = JSON.parse(window.localStorage.getItem("favoritedMovies")) ?? []
    // ?? is nullish coalescing
    setFavorited(currentFavorites.includes(movieId))
  }, [movieId]) // props often are in this array
  // just cause you change the props doesn't mean the component gets unmounted and remounted

  useEffect(() => {
    let currentFavorites = JSON.parse(window.localStorage.getItem("favoritedMovies")) ?? []
    if (favorited) {
      currentFavorites = [...currentFavorites, movieId]
    } else {
      currentFavorites = currentFavorites.filter(favoriteId => movieId !== favoriteId)
    }
    window.localStorage.setItem("favoritedMovies", JSON.stringify(currentFavorites))
  }, [favorited, movieId])

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
            disabled={disableFavoriting}
            onClick={() => {
              setFavorited(isFavorited => !isFavorited);
            }}
            className="favorite-button"
          >
            <FontAwesomeIcon
              style={
                favorited
                  ? { color: "red", border: "none" }
                  : {
                      color: "transparent",
                      stroke: "black",
                      strokeWidth: "25px",
                    }
              }
              icon={faHeart}
            />
            {"    Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}
