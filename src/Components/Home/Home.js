import React from "react";
import MovieCards from "./MovieCards/MovieCards";
import "./Home.scss";
import Header from "../Header/Header";

function Home() {
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
