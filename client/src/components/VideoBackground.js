import React from "react";
import useBackground from "./Hooks/useBackground";
import { useSelector } from "react-redux";

const VideoBackground = ({movie_id}) => {
   useBackground(movie_id);
   const movie=useSelector(store=>store.movie.backgroundMovie);
   if(!movie){
    return;
   }
   const key=movie.key;
  return (
    <div className="h-screen w-screen">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
