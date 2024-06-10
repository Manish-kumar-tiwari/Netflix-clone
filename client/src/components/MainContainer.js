import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieList = useSelector((store) => store.movie.nowPlaying);
  const movie = movieList[4];
  if(!movie){
    return;
  }
  const {overview,id,title}=movie;


  return (
    <div >
      <VideoTitle title={title} overview={overview} />
      <VideoBackground  movie_id={id} />
    </div>
  );
};

export default MainContainer;
