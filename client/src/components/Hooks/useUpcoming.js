import axios from "axios";
import options from "../constents";
import { useDispatch } from "react-redux";
import { setUpComing } from "../utils/movieSlice";
const useUpcoming = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );

    dispatch(setUpComing(res.data.results));
    
  } catch (error) {
    console.log(error);
  }
};

export default useUpcoming;
