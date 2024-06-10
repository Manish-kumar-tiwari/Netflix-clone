import axios from "axios";
import options from "../constents";
import { useDispatch } from "react-redux";
import { setPopular } from "../utils/movieSlice";
const usePopular = async () => {
  const dispatch=useDispatch();
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );

    dispatch(setPopular(res.data.results));

   
  } catch (error) {
    console.log(error);
  }
};

export default usePopular;
