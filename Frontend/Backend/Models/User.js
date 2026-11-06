const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    vehicleType : {
        type : String,
        enum : ["sedan", "suv", "compact_ev", "hatchback", "truck"],
        default : null
    },
    vehicleName : {
        type : String,
        default : ""
    },
    preferredDrivingStyle : {
        type : String,
        enum : ["eco", "normal", "aggressive", ""],
        default : ""
    },
    preferredDrivingCondition: {
        type: String,
        enum: ["city", "highway", "mixed", ""],
        default: "",
      },
    profileComplete : {
        type : Boolean ,
        default : false
    },
    date : {
        type : Date,
        default : Date.now
    }
}, { timestamps : true})

module.exports = mongoose.model("User", UserSchema)