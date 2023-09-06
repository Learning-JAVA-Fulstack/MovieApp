import React from "react";
import image from "../../../Images/spidermannowhome.jpg";
import "./MovieCards.scss";
import { useNavigate } from "react-router-dom";

function MovieCards() {
  const navigate = useNavigate();
  const movieDratils = {
    movieName: "Spider-Man: No Way Home",
    director: "Jon Watts",
    releasedOn: "2021",
    movieposter: image,
  };
  return (
    <div className="main-contanier" onClick={() => navigate("/movie-detail")}>
      <div className="movie-container">
        <img src={image} className="image" />
        <div className="movie-details">
          <p className="movie-name">{movieDratils.movieName}</p>
          <p>Realead On:{movieDratils.releasedOn}</p>
          <p>Directed By: {movieDratils.director}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCards;
