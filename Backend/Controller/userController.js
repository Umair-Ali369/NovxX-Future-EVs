const bcrypt = require('bcryptjs')
const User  = require('../Models/User')
const jwt = require('jsonwebtoken')


// REGISTER USERS
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, voiceEnable } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All Field are required" });
    }

    // check if user already exist
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(403).json({ message: "User already Exist" });
    }

    // password hashing ( security )
    const hashPassword = await bcrypt.hash(password, 10);

    // new user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      voiceEnable
    });

    res.status(200).json({
      message: `User Registered!`,
      User: {
        name: user.name,
        email: user.email,
      }
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// LOGIN USER
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found." });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    const token = jwt.sign(
      { id: user._id},
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      },
    );

    res.status(200).json({
      message: "Logged!",
      User: user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: `Server Error : ${err.message}` });
  }
};

// CURRENT USER
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
