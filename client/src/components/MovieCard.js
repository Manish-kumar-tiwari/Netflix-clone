import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import MovieDialogue from "./MovieDialogue";
import { setOpen } from "./utils/movieSlice";
import options from "./constents";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(null);
  const [bool, setBool] = useState(false);

 
  if (movie.poster_path === null) {
    return;
  }

  const handleMovie = async (movie_id) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        options
      );
      const trailer = res?.data?.results?.filter((item) => {
        return item.type === "Trailer";
      });

      setKey(trailer[0].key);

      setBool(true);
      dispatch(setOpen(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
      <div
        
        className="card card-body border-solid-white flex justify-center "
        style={{ height: "300px", width: "240px" }}
      >
        
       
        {bool && <MovieDialogue ke={key} />}
        <img
          className="cursor-pointer hover-class "
          onClick={() => handleMovie(movie.id)}
          width="93%"
          height="95%"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie"
        />
        
      </div>
    </>
  );
};

export default MovieCard;
