import axios from "axios";
import options from "../constents";
import { useDispatch } from "react-redux";
import { setTopRated } from "../utils/movieSlice";
const useTopRated = async () => {
  const dispatch=useDispatch();
  try {
        const res=await axios.get("https://api.themoviedb.org/3/movie/top_rated",options);
        dispatch(setTopRated(res.data.results));
        
  } catch (error) {
    console.log(error);
  }
};

export default useTopRated;
