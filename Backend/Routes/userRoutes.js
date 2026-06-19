const express = require("express");
const { registerUser, loginUser, dashboard } = require("../Controller/userController");
const protect = require("../MIddlewares/authMiddleware");
const { evCalculator } = require("../Controller/calculatorController");

const Router = express.Router();

// Authnetication Routes
Router.post("/user/register", registerUser);
Router.post("/user/login", loginUser)

// Calculator Routes
Router.post("/calculator", protect, evCalculator)
Router.get("/dashboard", protect, dashboard)


module.exports = Router
