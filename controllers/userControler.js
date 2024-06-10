const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RegisterCtrl = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(200).json({
        msg: "Invalid Cradential",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({
        msg: "This Email is already exist",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({ fullName, email, password: hashPassword });

    return res.status(201).json({
      msg: "User Registered Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Registration Failed",
      success: false,
    });
    console.log("Register", error);
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        msg: "Invalid Credential",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        msg: "Invalid Credentisl",
        success: false,
      });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).json({
        msg: "Invalid Credentisl",
        success: false,
      });
    }

    const token = jwt.sign({ name: user.fullName }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .json({ msg: "Login SuccessFull", success: true, token: user.fullName });
  } catch (error) {
    res.status(500).json({
      msg: "Login Failed",
      success: false,
    });

    console.log("Login", error);
  }
};

const googleCtrl = async (req,res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(200).json({
        msg: "Invalid Cradential",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({
        msg: "Login SuccessFull",
        success: true,
        token: user.fullName,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({ fullName, email, password: hashPassword });

    return res.status(200).json({
      msg: "Login SuccessFull",
      success: true,
      token: user.fullName,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Registration Failed",
      success: false,
    });
    console.log("Register", error);
  }
};

module.exports = { RegisterCtrl, loginCtrl, googleCtrl };
