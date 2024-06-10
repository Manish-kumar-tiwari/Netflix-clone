import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Oauth = () => {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await axios.post("/api/v1/user/google", {
        fullName: result.user.displayName,
        email: result.user.email,
        password: "1234",
      });

      localStorage.setItem("token", JSON.stringify(res.data.token));

      message.success("Login SuccessFull");
      navigate("/browse");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="bg-red-800 w-48 mt-4 p-3 font-bold text-white"
      onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
};

export default Oauth;
