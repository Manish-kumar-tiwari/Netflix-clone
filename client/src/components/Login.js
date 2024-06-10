import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { message } from "antd";
import Oauth from "./Oauth";



const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/browse");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post("/api/v1/user/login", {
          email,
          password,
        });

        console.log(response);

        if (response.data.success) {
          message.success(response.data.msg);
          localStorage.setItem("token", JSON.stringify(response.data.token));
          navigate("/browse");
        } else {
           message.error(response.data.msg);
        }
      } catch (error) {
        console.log(error);
        message.error(error.response.data.msg);
      }
    } else {
      try {
        const response = await axios.post("/api/v1/user/register", {
          fullName,
          email,
          password,
        });

        console.log(response);

        if (response.data.success) {
          message.success(response.data.msg);
          setLogin(true);
        } else {
          message.error(response.data.msg);
        }
      } catch (error) {
        console.log(error);
        message.error(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-[100vw] h-[100vh] bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Banner"
        />
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90"
      >
        <h1 className="font-bold text-3xl my-3 pb-2 text-white">
          {isLogin ? "Login" : "SignUp"}
        </h1>
        {!isLogin && (
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          type="Password"
          placeholder="Password"
        />

        <button className="bg-red-800 w-48 mt-4 p-3 font-bold text-white">
          {isLogin ? "LogIn" : "SingUp"}{" "}
        </button>

       <Oauth/>
        <p className="mt-2 text-white">
          {isLogin ? "New To Netflix? " : "Already Have an Account? "}{" "}
          <span
            onClick={() => setLogin(!isLogin)}
            className="text-blue-950 cursor-pointer"
          >
            {isLogin ? "SingUp" : "Login"}{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
