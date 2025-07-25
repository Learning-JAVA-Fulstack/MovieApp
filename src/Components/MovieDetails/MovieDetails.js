import React from "react";
import Header from "../Header/Header";
import image from "../../Images/spidermannowhome.jpg";

function MovieDetails() {
  const movieDratils = {
    movieName: "Spider-Man: No Way Home",
    director: "Jon Watts",
    releasedOn: "2021",
    movieposter: image,
    videoID: "rt-2cxAiPJk",
    describe:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  };
  return (
    <div>
      <Header />
      {/* <BackgroundVideo videoID={movieDratils.videoID} /> */}
      <div
        style={{
          marginTop: "80px",
          display: "flex",
          marginLeft: "200px",
          marginRight: "200px",
        }}
      >
        <div>
          <img src={image} alt="DOnt know"/>
        </div>
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <p style={{ fontSize: "50px", margin: 10 }}>
            {movieDratils.movieName}
          </p>
          <span style={{ fontSize: "25px", margin: 10 }}>
            Released On: {movieDratils.releasedOn}
          </span>
          <span style={{ fontSize: "25px", margin: 10 }}>
            Directed By: {movieDratils.director}
          </span>
          <span style={{ width: "40vw", margin: 10 }}>
            {movieDratils.describe}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
