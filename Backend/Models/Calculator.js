const mongoose = require("mongoose");

const calculatorSchema = mongoose.Schema({
  userId : {
    type : String,
  },
  batteryPercent: {
    type: Number,
    required: true,
  },
  fullRange: {
    type: Number,
    required: true,
  },
  DrivingCondition: {
    type: String,
    required: true,
  },
  acUsage: {
    type: Boolean,
  },
  passengers: {
    type: Number,
  },
  finalRange: {
    type: Number,
  },
  effciciency: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Calculator", calculatorSchema);
