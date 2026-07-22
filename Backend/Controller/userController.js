const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const Calculator = require("../Models/Calculator");

// REGISTER USERS
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
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
    });

    res.status(200).json({
      message: `User Registered!`,
      User: {
        name: user.name,
        email: user.email,
      },
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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "Logged!",
      User: user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: `Server Error : ${err.message}` });
  }
};

// DASHBOARD VIEW
exports.dashboard = async (req, res) => {
  try {
    const userId = req.user?._id || req.params.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized — please log in" });
    }
    const filter = userId ? { userId } : {};
    const totalCalculationCount = await Calculator.countDocuments(filter);

    const history = await Calculator.find(filter).sort({ date: -1 });

    if (history.length === 0) {
      return res.status(200).json({
        data: {
          avgRange: 0,
          mostUsed: "N/A",
          totalCalculationCount: 0,
          lastFive: [],
        },
      });
    }

    // ---- Average Range ----
    const averageRange =
      history.reduce((sum, h) => sum + h.finalRange, 0) / history.length || 0;
    // ---- Most Used Driving Condition ----
    const conditionCount = history.reduce((acc, r) => {
      const key = r.DrivingCondition || "unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    console.log(averageRange);

    const mostUsed = Object.entries(conditionCount).sort(
      (a, b) => b[1] - a[1],
    )[0][0];

    const RECENT_LIMIT = 10;
    const lastFive = history.slice(0, RECENT_LIMIT);

    res.status(200).json({
      data: {
        lastFive,
        avgRange: averageRange,
        mostUsed,
        totalCalculationCount,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
