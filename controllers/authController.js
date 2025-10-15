const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

const JWT_SECRET = "mySuperSecretKey";

exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body; //destructuring

    const existing = await User.findOne({ email }); //find the email
    if (existing)
      return res.status(200).json({
        message: "User Already Exist.",
      });

    const salt = await bcrypt.genSalt(10); //generate the random string for the security
    const handlePassword = await bcrypt.hash(password, salt); //convert it into hash(encrypt)

    const user = await User.create({
      name,
      email,
      password: handlePassword,
    });

    res.status(201).json({
      success: true,
      message: "User Successfully created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser)
      return res.status(404).json({
        message: "User Not Found.",
      });

    const isMacthing = await bcrypt.compare(password, findUser.password);
    if (!isMacthing)
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });

    const token = jwt.sign(
      { id: findUser._id, email: findUser.email }, //encode the token
      JWT_SECRET, // only my server can create and generate the token
      { expiresIn: "1hr" }
    );

    res.status(200).json({
      message: "Successfully Login",
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
