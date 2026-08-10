const express = require("express");
const { registerUser, loginUser, dashboard } = require("../Controller/userController");
const protect = require("../MIddlewares/authMiddleware");
const { evCalculator } = require("../Controller/calculatorController");
const { getProfile, updateProfile } = require("../Controller/profileController");

const Router = express.Router();

// Authnetication Routes
Router.post("/user/register", registerUser);
Router.post("/user/login", loginUser)

// Calculator Routes
Router.post("/calculator", protect, evCalculator)
Router.get("/dashboard", protect, dashboard)

// Profile Routes 
Router.get("/profile", protect, getProfile)
Router.put("/profile", protect, updateProfile)

module.exports = Router
