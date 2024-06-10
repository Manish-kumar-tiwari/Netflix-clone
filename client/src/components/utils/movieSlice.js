import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
    backgroundMovie: null,
    searchMovieName: "",
    searchMovieList: null,
    bool: false,
    taugle: false,
    open: false,
  },
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },

    setPopular: (state, action) => {
      state.popular = action.payload;
    },

    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },

    setUpComing: (state, action) => {
      state.upComing = action.payload;
    },

    setTaugle: (state) => {
      state.taugle = !state.taugle;
    },

    setBackgroundMovie: (state, action) => {
      state.backgroundMovie = action.payload;
    },
    setSearchMovieName: (state, action) => {
      state.searchMovieName = action.payload;
    },
    setSearchMovieList: (state, action) => {
      state.searchMovieList = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const {
  setNowPlaying,
  setPopular,
  setTopRated,
  setUpComing,
  setTaugle,
  setBackgroundMovie,
  setSearchMovieName,
  setSearchMovieList,
  setOpen,
} = movieSlice.actions;
export default movieSlice.reducer;
