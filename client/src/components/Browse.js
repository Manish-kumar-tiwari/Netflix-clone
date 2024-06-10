import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { useNavigate } from "react-router-dom";
import useNowPlaying from "./Hooks/useNowPlaying";
import usePopular from "./Hooks/usePopular";
import useTopRated from "./Hooks/useTopRated";
import useUpcoming from "./Hooks/useUpcoming";
import { useSelector } from "react-redux";
import Search from "./Search";


const Browse = () => {
  const taugle = useSelector((store) => store.movie.taugle);
  const navigate = useNavigate();
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div  >
      <Header />

      {taugle ? (
        <Search  />
      ) : (
        <div>
          <MainContainer  />
          <MovieContainer />
        </div>
      )}

     
    </div>
  );
};

export default Browse;
