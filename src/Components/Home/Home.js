import React from "react";
import MovieCards from "./MovieCards/MovieCards";
import "./Home.scss";
import Header from "../Header/Header";

function Home() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
    8, 9,
  ];
  return (
    <div>
      <Header />
      <div className="movie-list">
          <MovieCards />
      </div>
    </div>
  );
}

export default Home;
