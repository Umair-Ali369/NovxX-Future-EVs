const express = require("express");
const protect = require("../MIddlewares/authMiddleware");
const {
  generateAiInsights,
  generateWeeklySummary,
} = require("../Controllers/aiInsightController");
 
const AiRouter = express.Router();
 
AiRouter.post("/insights", protect, generateAiInsights);
AiRouter.post("/weekly-summary", protect, generateWeeklySummary);
 
module.exports = AiRouter;
 