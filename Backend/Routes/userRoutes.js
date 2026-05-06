const express = require("express");
const { registerUser, loginUser } = require("../Controller/userController");
const protect = require("../MIddlewares/authMiddleware");
const { evCalculator } = require("../Controller/calculatorController");

const Router = express.Router();

// Authnetication Routes
Router.post("/user/register", registerUser);
Router.post("/user/login", loginUser)

// Calculator Routes
Router.post("/calculator", evCalculator)


module.exports = Router
