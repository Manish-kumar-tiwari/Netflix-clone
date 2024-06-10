import axios from "axios";
import options from "../constents";
import { useDispatch } from "react-redux";
import { setNowPlaying } from "../utils/movieSlice";
const useNowPlaying = async () => {
  const dispatch=useDispatch();
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );


    dispatch(setNowPlaying(res.data.results))
    
  } catch (error) {
    console.log(error);
  }
};

export default useNowPlaying;
