import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Movie({ title, posterUrl }) {
  const [favorited, setFavorited] = useState(false);
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
            onClick={() => {
              setFavorited((isFavorited) => !isFavorited);
              console.log("favorited!");
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
