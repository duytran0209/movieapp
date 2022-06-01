import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const Homepage = () => {
  return (
    <Fragment>
      <section className="movies-layout">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold page-container pb-20">
          Now playing
        </h2>

        <MovieList></MovieList>
      </section>

      <section className="movies-layout">
        <h2 className="capitalize text-white mt-20 text-3xl font-bold page-container pb-20">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movies-layout pb-20">
        <h2 className="capitalize text-white mt-20  text-3xl font-bold page-container pb-20">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default Homepage;
