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
  battery_size : {
    type : Number
  }, 
  temperature : {
    type : Number
  }, 
  vehicle_load : {
    type : Number
  }, 
  driving_style : {
    type : String
  }, 
  terrain_type : {
    type : String
  },
  finalRange: {
    type: Number,
  },
  efficiency: {
    type: String,
  }, 
  energyConsumption : {
    type : Number
  }, 
  batteryStress : {
    type : String
  },
  date: {
    type: Date,
    default: Date.now,
  },
  vehicleType: {
    type: String,
    default: null,
  }
});

module.exports = mongoose.model("Calculator", calculatorSchema);
