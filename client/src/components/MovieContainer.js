import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const nowPlaying = useSelector((store) => store.movie.nowPlaying);
  const popular = useSelector((store) => store.movie.popular);
  const topRated = useSelector((store) => store.movie.topRated);
  const upcomming = useSelector((store) => store.movie.upComing);

  return (
    <div className="-mt-52 relative z-10 bg-black">
      <MovieList title="Now Playing Movie" movie={nowPlaying} />
      <MovieList title="Popular Movie" movie={popular} />
      <MovieList title="Top Rated Movie" movie={topRated} />
      <MovieList title="Upcomming Movie" movie={upcomming} />
    </div>
  );
};

export default MovieContainer;
 