import { message } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTaugle } from "./utils/movieSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taugle = useSelector((store) => store.movie.taugle);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    message.success("Logout SuccessFull");
    navigate("/");
  };

  const handleSearch = () => {
    dispatch(setTaugle());
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("token")));
  }, []);

  return (
    <div className="m-1 absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />

      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown color="white" size="24px" />
          <h1 className="text-lg font-medium text-white">{user}</h1>

          <div className="ml-4">
            <button
              onClick={logoutHandler}
              className="px-4 py-2 bg-red-800 text-white"
            >
              LogOut
            </button>
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-red-800 text-white"
            >
              {taugle ? "Home" : " Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
