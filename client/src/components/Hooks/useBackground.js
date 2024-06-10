import React, { useEffect } from "react";
import axios from "axios";
import options from "../constents";
import { useDispatch } from "react-redux";
import { setBackgroundMovie } from "../utils/movieSlice";



const useBackground = async (movie_id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options);

        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        })
        dispatch(setBackgroundMovie(trailer[0]));
      } catch (error) {
        console.log(error);
      }
    }
    getMovieById();
  },[])
};

export default useBackground;
