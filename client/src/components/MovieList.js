import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div className="p-4">
      <br />
      <h1 className="text-3xl text-white ml-7 ">{title}</h1>
      <br />

      <div className="flex  overflow-x-auto cursor-pointer scrollbar-hide ">
        <div className="flex items-center ">
          {movie &&
            movie.map((mov, idx) => <MovieCard movie={mov} key={idx} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
