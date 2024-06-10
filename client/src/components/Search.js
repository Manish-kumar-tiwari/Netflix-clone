import React, { useState } from "react";
import axios from "axios";
import options from "./constents";
import { useDispatch } from "react-redux";
import { setSearchMovieList, setSearchMovieName } from "./utils/movieSlice";
import SearchMovie from "./SearchMovie";

const Search = () => {
  const [search, setSearch] = useState();
  const [bool, setBool] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
        options
      );
      setBool(true);
      dispatch(setSearchMovieName(search));
      dispatch(setSearchMovieList(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <div className="flex justify-center pt-[10%] w-[100%]
      ">
        <form onSubmit={handleSubmit} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
            <input
              value={search}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="Search Movies..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">
              Search
            </button>
          </div>
        </form>
      </div>

      {bool && (
        <div className="">
          <SearchMovie />
        </div>
      )}
    </div>
  );
};

export default Search;
