import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";

const SearchMovie = () => {
  const title = useSelector((store) => store.movie.searchMovieName);
  const movie = useSelector((store) => store.movie.searchMovieList);


  return (
    <div className="bg-white">
      <h1 className="text-3xl m-7 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer scrollbar-hide" >
        <div className="flex items-center ">
          {movie &&
            movie.map((mov, idx) => <MovieCard movie={mov} key={idx} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
